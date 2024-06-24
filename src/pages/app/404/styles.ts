import styled from 'styled-components'

export const Container = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 2rem;

  h1 {
    padding: 0 1rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-text']};
  }

  p {
    color: ${(props) => props.theme['base-label']};

    a {
      text-decoration: none;
      color: ${(props) => props.theme['base-text']};
      font-weight: bold;
    }
  }
`
