import { forwardRef, InputHTMLAttributes } from 'react'

import { InputContainer } from './styles'

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {
  publicationsCount?: number
}

const InputSearch = forwardRef<HTMLInputElement, InputSearchProps>(
  ({ publicationsCount, ...props }, ref) => {
    return (
      <InputContainer>
        <div>
          <strong>Publicações</strong>
          {publicationsCount && <span>{publicationsCount} publicações</span>}
        </div>
        <input
          type="search"
          placeholder="Digite algo para pesquisar e pressione ENTER"
          ref={ref}
          {...props}
        />
      </InputContainer>
    )
  },
)
InputSearch.displayName = 'InputSearch'

export { InputSearch }
