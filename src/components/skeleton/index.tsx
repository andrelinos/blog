import { ReactNode } from 'react'

import { SkeletonCardItem, SkeletonContainer, SkeletonWrapper } from './styles'

interface SkeletonWrapperProps {
  width?: string | number
  height?: string | number
}

interface SkeletonContainerProps {
  children: ReactNode
}

export const Skeleton = ({ width, height }: SkeletonWrapperProps) => {
  return <SkeletonWrapper width={width} height={height} />
}

export const SkeletonContainerRoot = ({ children }: SkeletonContainerProps) => {
  return <SkeletonContainer>{children}</SkeletonContainer>
}

export const SkeletonCard = ({ children }: SkeletonContainerProps) => {
  return <SkeletonCardItem>{children}</SkeletonCardItem>
}
