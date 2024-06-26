import { useEffect, useRef, useState } from 'react'

import { IssueProps, UserProps } from '@/_types/github'
import { env } from '@/env'
import {
  fetchGithubIssuesData,
  fetchGithubUserData,
} from '@/utils/fetchGithubUserData'

import { InputSearch } from './components/input-search'
import { Posts } from './components/posts'
import { Profile } from './components/profile'
import { HomeContainer } from './styles'

export function Home() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [userData, setUserData] = useState<UserProps | null>()
  const [issuesData, setIssuesData] = useState<IssueProps[] | null>()
  const [loading, setLoading] = useState(true)
  const [textSearch, setTextSearch] = useState('')

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = async (
    event,
  ) => {
    if (event.key === 'Enter') {
      try {
        setLoading(true)

        const data = await fetchGithubIssuesData({
          username: env.VITE_GITHUB_USER,
          query: textSearch,
          repo: env.VITE_REPO_NAME,
        })

        console.log(data?.issuesData.items)
        setIssuesData(data?.issuesData.items)
      } catch (error) {
        console.error('Erro ao executar a busca:', error)
        // Tratar o erro conforme necessário
      } finally {
        setLoading(false)
      }
    }
  }

  // const fetchIssues = useCallback(async (query: string = '') => {
  //   try {
  //     setLoading(true)
  //     const response = await api.get(
  //       `/search/issues?q=${query}%20repo:${env.VITE_GITHUB_USER}/${env.VITE_REPO_NAME}`,
  //     )
  //     setGitData(response.data.items)
  //   } finally {
  //     setLoading(false)
  //   }
  // }, [])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const data = await fetchGithubUserData({ username: 'andrelinos' })
        setUserData(data?.userData)
        setIssuesData(data?.issuesData)
      } catch (error) {
        setIssuesData(null)
        setUserData(null)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <HomeContainer>
      <Profile data={userData} isLoading={loading} />
      <InputSearch
        publicationsCount={issuesData?.length}
        ref={inputRef}
        value={textSearch}
        onChange={(e) => setTextSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Posts data={issuesData} isLoading={loading} />
    </HomeContainer>
  )
}
