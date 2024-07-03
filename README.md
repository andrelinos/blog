# Blog de Issues do GitHub

Este é um aplicativo de blog construído com Vite.js e React.js que lê projetos do GitHub e lista todas as suas issues abertas em forma de posts.

## Tecnologias Utilizadas

- **Vite.js**: Ferramenta de construção rápida para desenvolvimento web moderno.
- **React.js**: Biblioteca JavaScript para construção de interfaces de usuário.
- **react-syntax-highlighter**: Utilizado para destacar trechos de código nos posts.
- **react-markdown**: Utilizado para renderizar conteúdo Markdown.
- **react-router-dom**: Utilizado para gerenciamento de rotas no React.
- **zod**: Utilizado para validação e análise de dados.

## Instalação

1. Clone o repositório:

   ```sh
   git clone https://github.com/andrelinos/blog.git
   ```

2. Navegue até o diretório do projeto:

   ```sh
   cd seu-repositorio
   ```

3. Instale as dependências:

   ```sh
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```sh
   npm run dev
   ```

## Uso

### react-syntax-highlighter

Para destacar trechos de código, você pode usar o `react-syntax-highlighter` da seguinte forma:

```jsx
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const codeString = '(num) => num + 1';

<SyntaxHighlighter language="javascript" style={docco}>
  {codeString}
</SyntaxHighlighter>
```

### react-markdown

Para renderizar conteúdo Markdown, utilize o `react-markdown`:

```jsx
import ReactMarkdown from 'react-markdown';

const markdown = `
# Título

Este é um parágrafo em **Markdown**.
`;

<ReactMarkdown>{markdown}</ReactMarkdown>
```

### react-router-dom

Para gerenciamento de rotas, utilize o `react-router-dom`:

```jsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Post from './Post';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/post/:id" component={Post} />
    </Switch>
  </Router>
);

export default App;
```

### zod

Para validação e análise de dados, utilize o `zod`:

```jsx
import { z } from 'zod';

const PostSchema = z.object({
  id: z.number(),
  title: z.string(),
  body: z.string(),
});

const validatePost = (post) => {
  try {
    PostSchema.parse(post);
    console.log('Post is valid');
  } catch (e) {
    console.error('Invalid post:', e.errors);
  }
};
```

## Possíveis Usos do Blog

- **Publicação de Conteúdo Técnico**: Publicar tutoriais e artigos técnicos baseados em issues do GitHub.
- **Gerenciamento de Projetos**: Usar como um painel para visualizar e gerenciar issues abertas em um projeto GitHub.
- **Compartilhamento de Problemas e Soluções**: Compartilhar problemas encontrados e as respectivas soluções diretamente das issues do GitHub.
- **Blog Pessoal**: Transformar issues em posts para uso pessoal ou profissional, criando um blog a partir das issues do GitHub.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.
