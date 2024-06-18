export interface UserProps {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: 'User'
  site_admin: boolean
  name?: string | null // '?' indica que o campo é opcional
  company?: any | null // Substitua 'any' pelo tipo de objeto correto se necessário
  blog?: string | null // '?' indica que o campo é opcional
  location?: string | null // '?' indica que o campo é opcional
  email?: any | null // Substitua 'any' pelo tipo de objeto correto se necessário
  hireable?: any | null // Substitua 'any' pelo tipo de objeto correto se necessário
  bio?: string | null // '?' indica que o campo é opcional
  twitter_username?: any | null // Substitua 'any' pelo tipo de objeto correto se necessário
  public_repos?: number | null // '?' indica que o campo é opcional
  public_gists?: number | null // '?' indica que o campo é opcional
  followers?: number | null // '?' indica que o campo é opcional
  following?: number | null // '?' indica que o campo é opcional
  created_at?: Date | null // '?' indica que o campo é opcional
}

export interface ReactionsProps {
  url: string
  total_count: number
  '+1': number
  '-1': number
  laugh: number
  hooray: number
  confused: number
  heart: number
  rocket: number
  eyes: number
}

export interface IssueProps {
  url: string
  repository_url: string
  labels_url: string
  comments_url: string
  events_url: string
  html_url: string
  id: number
  node_id: string
  number: number
  title: string
  user: UserProps
  labels: any[]
  state: 'open' | 'closed'
  locked: boolean
  assignee?: UserProps | null
  assignees?: UserProps[] | null
  milestone?: any | null
  comments?: number | null
  created_at?: Date | null
  updated_at?: Date | null
  closed_at?: Date | null
  author_association?: string | null
  active_lock_reason?: any | null
  body?: string | null
  reactions?: ReactionsProps | null
  timeline_url?: string | null
  performed_via_github_app?: any | null
}
