import { Link } from 'react-router-dom'

import { Container } from './styles'

export function Error() {
  return (
    <Container>
      <h1>
        Whoops, algo aconteceu... Tome um cafezinho e tente novamente mais
        tarde.
      </h1>

      <img
        src="/public/assets/error.png"
        alt="Whoops, algo aconteceu..."
        className="h-92 w-92 rounded-full  object-cover"
      />

      <p>Um erro aconteceu na aplicação, abaixo você encontra mais detalhes:</p>

      <p className="text-accent-foreground">
        Voltar para a{' '}
        <Link to="/" className="text-sky-500 dark:text-sky-400">
          Página inicial
        </Link>
      </p>
    </Container>
  )
}
