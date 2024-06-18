import { FaCalendar, FaGithub, FaMessage } from 'react-icons/fa6'
import { PiCaretLeft } from 'react-icons/pi'
import { Link } from 'react-router-dom'

import { IssueProps } from '@/_types/github'
import { formatDate } from '@/utils/formatDate'

import { PostContainer, PostContent, PostHeader, PostSocial } from './styles'

interface PostProps {
  data?: IssueProps | null | undefined
  isLoading?: boolean
}

export function HeaderPost({ data, isLoading }: PostProps) {
  if (isLoading) return <p>Loading...</p>

  return (
    <PostContainer>
      <PostContent>
        <div>
          <PostHeader>
            <div>
              <Link to="/">
                <PiCaretLeft size={32} strokeWidth={2} /> VOLTAR
              </Link>
              <Link to={data?.html_url || ''} target="_blank">
                VER NO GITHUB
              </Link>
            </div>
          </PostHeader>
          <h2>{data?.title}</h2>

          <PostSocial>
            <Link to={data?.user.html_url || ''} target="_blank">
              <FaGithub size={16} /> {data?.user.login}
            </Link>
            <span>
              <FaCalendar size={16} /> há {formatDate(data?.created_at)}
            </span>
            {Number(data?.comments) > 0 && (
              <span>
                <FaMessage size={16} /> {String(data?.comments) || '0'}{' '}
                comentários
              </span>
            )}
          </PostSocial>
        </div>
      </PostContent>
    </PostContainer>
  )
}
