import { IssueProps } from '@/_types/github'
import {
  Skeleton,
  SkeletonCard,
  SkeletonContainerRoot,
} from '@/components/skeleton'
import { formatDate } from '@/utils/formatDate'

import { PostCard, PostCardHeader, PostsContainer } from './styles'

interface PostsProps {
  data?: IssueProps[] | null
  isLoading?: boolean
}

export function Posts({ data, isLoading }: PostsProps) {
  if (isLoading) {
    return (
      <SkeletonContainerRoot>
        {Array.from({ length: 3 }).map((_, i) => {
          return (
            <SkeletonCard key={i}>
              <PostCardHeader>
                <Skeleton width="230px" height="30px" />
                <Skeleton width="90px" height="24px" />
              </PostCardHeader>
              <Skeleton height="24px" />
              <Skeleton height="24px" />
              <Skeleton height="24px" />
              <Skeleton height="24px" />
            </SkeletonCard>
          )
        })}
      </SkeletonContainerRoot>
    )
  }

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
