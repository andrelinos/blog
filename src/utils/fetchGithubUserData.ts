import { api } from '@/lib/axios'

interface FetchGithubUserDataProps {
  username: string
  query?: string
  repo?: string
}

const CACHE_KEY = 'githubUserData'
const CACHE_EXPIRY = 10 * 60 * 1000 // 10 minutes in milliseconds

export async function fetchGithubUserData({ username }: { username: string }) {
  const cacheUserData = localStorage.getItem(`${CACHE_KEY}:user-data`)
  const cacheIssuesData = localStorage.getItem(`${CACHE_KEY}:issues-data`)

  const cacheTime = localStorage.getItem(`${CACHE_EXPIRY}_time`)

  if (cacheUserData && cacheIssuesData && cacheTime) {
    const isExpired = new Date().getTime() - Number(cacheTime) > CACHE_EXPIRY

    if (!isExpired) {
      const userData = JSON.parse(cacheUserData)
      const issuesData = JSON.parse(cacheIssuesData)
      return { userData, issuesData }
    }
  }

  try {
    const responseUserData = await api.get(`/users/${username}`)
    const responseIssues = await api.get(`/repos/${username}/blog/issues`)

    const userData = responseUserData.data
    const issuesData = responseIssues.data

    localStorage.setItem(`${CACHE_KEY}:user-data`, JSON.stringify(userData))
    localStorage.setItem(`${CACHE_KEY}:issues-data`, JSON.stringify(issuesData))

    localStorage.setItem(`${CACHE_EXPIRY}_time`, String(new Date().getTime()))

    const result = { userData, issuesData }
    return result
  } catch {
    //
  }
}

export async function fetchGithubIssuesData({
  username,
  query,
  repo,
}: FetchGithubUserDataProps) {
  if (query && repo) {
    try {
      const responseIssues = await api.get(
        `/search/issues?q=${query}%20repo:${username}/${repo}`,
      )

      const issuesData = responseIssues.data

      const result = { issuesData }
      return result
    } catch {
      //
    }
  }
}
