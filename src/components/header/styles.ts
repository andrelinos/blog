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
    max-width: none; /* Remove qualquer restrição de largura */
    max-height: none; /* Remove qualquer restrição de altura */
    object-fit: none; /* Impede que a imagem seja redimensionada */
    object-position: center; /* Centraliza a imagem */
  }
`
