import { Link } from 'react-router-dom'

import { Container } from './styles'

export function NotFound() {
  return (
    <Container>
      <h1 className="max-w-4xl px-2 text-4xl font-bold">
        404 - Página não encontrada.
      </h1>

      <div className="flex h-96 w-96 items-center justify-center overflow-hidden rounded-full border border-violet-500 p-4 dark:via-violet-400">
        <img
          src="/assets/404.png"
          alt="Página não encontrada"
          className="h-92 w-92 rounded-full  object-cover"
        />
      </div>

      <p className="text-accent-foreground">
        Voltar para a{' '}
        <Link to="/" className="text-sky-500 dark:text-sky-400">
          Página inicial
        </Link>
      </p>
    </Container>
  )
}
