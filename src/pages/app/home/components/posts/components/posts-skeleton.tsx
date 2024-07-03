import {
  Skeleton,
  SkeletonCard,
  SkeletonContainerRoot,
} from '@/components/skeleton'

import { PostCardHeader } from '../styles'

export function PostsSkeleton() {
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
