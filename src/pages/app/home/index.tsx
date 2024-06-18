import { InputSearch } from './components/input-search'
import { Posts } from './components/posts'
import { Profile } from './components/profile'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <InputSearch />
      <Posts />
    </HomeContainer>
  )
}
