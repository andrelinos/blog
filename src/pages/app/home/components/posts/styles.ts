import styled from 'styled-components'

export const PostsContainer = styled.section`
  width: 864px;
  height: auto;
  margin: 0 auto;
  padding: 3rem 0;

  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.5;
    max-height: calc(1.6em * 4);
    color: ${(props) => props.theme['base-text']};
  }
`

export const PostCard = styled.div`
  width: 26rem;
  height: 16.25rem;
  border-radius: 10px;
  padding: 2rem;
  border: 1px solid transparent;
  background: ${(props) => props.theme['base-post']};
  color: ${(props) => props.theme['base-title']};
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: ${(props) => props.theme['base-label']};
    cursor: pointer;
  }
`

export const PostCardHeader = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1.25rem;

  > h2 {
    padding-right: 1rem;
    font-size: 1.25rem;
  }

  span {
    min-width: min-content;
    white-space: nowrap;
    padding-top: 0.325rem;
    color: ${(props) => props.theme['base-span']};
  }
`
