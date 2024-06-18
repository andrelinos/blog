import { useEffect, useState } from 'react'

import { IssueProps, UserProps } from '@/_types/github'
import { fetchGithubUserData } from '@/utils/fetchGithubUserData'

import { InputSearch } from './components/input-search'
import { Posts } from './components/posts'
import { Profile } from './components/profile'
import { HomeContainer } from './styles'

interface GitDataProps {
  userData: UserProps
  issuesData: IssueProps[]
}

export function Home() {
  const [gitData, setGitData] = useState<GitDataProps | null>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const data = await fetchGithubUserData('andrelinos')
        setGitData(data)
      } catch (error) {
        setGitData(null)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  console.log('USER DATA ::', JSON.stringify(gitData?.issuesData, null, 2))

  return (
    <HomeContainer>
      <Profile data={gitData?.userData} isLoading={loading} />
      <InputSearch />
      <Posts data={gitData?.issuesData} isLoading={loading} />
    </HomeContainer>
  )
}
