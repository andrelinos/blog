import styled from 'styled-components'

export const InputContainer = styled.div`
  width: 864px;
  margin: 0 auto;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.625rem;

    > span:first-of-type {
      font-size: 1.125rem;
      font-weight: bold;
      color: ${(props) => props.theme.white};
    }

    > span:last-of-type {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    all: unset;
    border: 1px solid;
    border-color: ${(props) => props.theme['base-border']};
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    border-radius: 0.625rem;
    padding-right: 1rem;
    padding-left: 1rem;
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      border-color: ${(props) => props.theme.blue};
    }
  }
`
