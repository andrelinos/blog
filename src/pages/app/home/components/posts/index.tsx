import { IssueProps } from '@/_types/github'
import { formatDate } from '@/utils/formatDate'

import { PostCard, PostCardHeader, PostsContainer } from './styles'

interface PostsProps {
  data?: IssueProps[] | null
  isLoading?: boolean
}

export function Posts({ data, isLoading }: PostsProps) {
  if (isLoading) return <p>Loading...</p>

  return (
    <PostsContainer>
      {data?.map((issue, i) => {
        return (
          <PostCard key={i} to={`/post/${issue.number}`}>
            <PostCardHeader>
              <h2>{issue.title}</h2>
              <span>há {formatDate(issue?.created_at)}</span>
            </PostCardHeader>
            <p>{issue.body}</p>
          </PostCard>
        )
      })}
    </PostsContainer>
  )
}
