import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'

import { IssueProps, UserProps } from '@/_types/github'
import { env } from '@/env'
import { fetchGithubUserData } from '@/utils/fetchGithubUserData'

import { HeaderPost } from './components/header'
import { SyntaxHighlighter } from './components/syntax-component'
import { PostContainer, PostContent } from './styles'

interface GitDataProps {
  userData: UserProps
  issuesData: IssueProps[]
}

export function Post() {
  const { number } = useParams()

  const [gitData, setGitData] = useState<GitDataProps | null>()
  const [loading, setLoading] = useState(true)

  const issue = gitData?.issuesData.find(
    (is) => String(is.number)?.trim() === String(number)?.trim(),
  )

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const data = await fetchGithubUserData({
          username: env.VITE_GITHUB_USER,
        })
        setGitData(data)
      } catch (error) {
        setGitData(null)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <p>Loading...</p>

  return (
    <PostContainer>
      <HeaderPost data={issue} />
      <PostContent>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code: ({ node, content, className, children, ...props }) => {
              const match = /language-(\w+)/.exec(className || '')
              return !content && match ? (
                <SyntaxHighlighter
                  style={darcula}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        >
          {issue?.body}
        </ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
