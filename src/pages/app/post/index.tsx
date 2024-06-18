import { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import remarkGfm from 'remark-gfm'

import { IssueProps, UserProps } from '@/_types/github'
import { fetchGithubUserData } from '@/utils/fetchGithubUserData'

import { HeaderPost } from './components/header'
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
        const data = await fetchGithubUserData('andrelinos')
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
        <Markdown remarkPlugins={[remarkGfm]}>{issue?.body}</Markdown>
      </PostContent>
    </PostContainer>
  )
}
