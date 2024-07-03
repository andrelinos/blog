import styled from 'styled-components'

export const FooterContainer = styled.section`
  display: flex;
  height: 16rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme['base-background-footer']};
  color: ${(props) => props.theme['base-text']};
  border-top: 1px solid ${(props) => props.theme['base-border']};

  div {
    display: flex;
    align-items: center;
    text-align: center;
    gap: 1rem;
    margin-top: 1rem;

    a {
      display: flex;
      gap: 0.325rem;
      align-items: center;
      color: ${(props) => props.theme['base-label']};
      transition: 0.3s all ease-in-out;
      text-decoration: none;
      text-underline-offset: 0.5rem;

      &:hover {
        color: ${(props) => props.theme['base-title']};
        text-decoration: underline;
      }
    }
  }
`
