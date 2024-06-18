import { PostCard, PostCardHeader, PostsContainer } from './styles'

export function Posts() {
  return (
    <PostsContainer>
      {Array.from({ length: 10 }).map((_, i) => {
        return (
          <PostCard key={i}>
            <PostCardHeader>
              <h2>JavaScript dad types and data structures</h2>
              <span>Há 1 dia</span>
            </PostCardHeader>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn.
            </p>
          </PostCard>
        )
      })}
    </PostsContainer>
  )
}
