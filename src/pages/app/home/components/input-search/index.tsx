import { InputContainer } from './styles'

export function InputSearch() {
  return (
    <InputContainer>
      <div>
        <span>Publicações</span>
        <span>6 publicações</span>
      </div>
      <input type="text" placeholder="Buscar conteúdo" />
    </InputContainer>
  )
}
