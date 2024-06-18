import styled from 'styled-components'

export const PostContainer = styled.header`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
`

export const PostContent = styled.section`
  width: 864px;
  height: auto;
  margin: 0 auto;
  padding: 3rem 0;

  color: ${(props) => props.theme['base-text']};
`
