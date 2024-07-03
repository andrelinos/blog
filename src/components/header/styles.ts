import styled from 'styled-components'

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    width: auto;
    height: auto;
    max-width: none;
    max-height: none;
    object-fit: none;
    object-position: center;
  }
`
