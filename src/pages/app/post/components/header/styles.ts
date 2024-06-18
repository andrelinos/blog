import styled from 'styled-components'

export const PostContainer = styled.header`
  position: relative;
  height: 160px;
`

export const PostContent = styled.div`
  width: 864px;
  height: 212px;
  z-index: 1;
  overflow: hidden;

  background: ${(props) => props.theme['base-profile']};
  color: ${(props) => props.theme['base-title']};
  border-radius: 10px;
  margin: -100px auto;
  padding: 32px;
  z-index: 99;

  display: flex;
  align-items: center;
  gap: 16px;

  > div {
    width: 100%;

    color: ${(props) => props.theme['base-text']};

    > h2 {
      font-size: 1.5rem;
    }
  }
`

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
      text-underline-offset: 5px;
      transition: all 0.3s ease-in-out;
    }
  }

  > div {
    width: 100%;
    padding-bottom: 1.25rem;
    display: flex;
    justify-content: space-between;
  }
`

export const PostSocial = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 24px;
  color: ${(props) => props.theme['base-label']};

  svg {
    color: ${(props) => props.theme['base-label']};
  }

  a {
    color: ${(props) => props.theme['base-subtitle']};
    text-decoration: none;
    display: flex;
    gap: 4px;
    align-items: center;

    &:hover {
      text-decoration: underline;
      text-underline-offset: 5px;
      transition: all 0.3s ease-in-out;
    }
  }
`
