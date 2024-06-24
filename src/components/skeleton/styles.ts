import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`

interface SkeletonWrapperProps {
  width?: string | number
  height?: string | number
}

export const SkeletonWrapper = styled.div<SkeletonWrapperProps>`
  display: inline-block;
  opacity: 0.3;
  height: ${({ height }) => height || '36px'};
  width: ${({ width }) => width || '100%'};
  background-color: #f0f0f0;
  background-image: linear-gradient(
    to right,
    #f0f0f0 0%,
    #7b96b2 20%,
    #f0f0f0 40%,
    #f0f0f0 100%
  );
  background-repeat: no-repeat;
  background-size: 1000px 100%;
  animation: ${shimmer} 2s infinite linear;
  border-radius: 4px;
`

export const SkeletonContainer = styled.section`
  width: 864px;
  height: auto;
  margin: 0 auto;
  padding: 3rem 0;

  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

export const SkeletonCardItem = styled.div`
  width: 26rem;
  height: 16.25rem;
  border-radius: 10px;
  padding: 2rem;
  border: 1px solid transparent;
  background: ${(props) => props.theme['base-post']};
`
