import { FaBuilding, FaGithub, FaUserGroup } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

import { UserProps } from '@/_types/github'

import {
  ProfileAvatar,
  ProfileContainer,
  ProfileContent,
  ProfileHeader,
  ProfileSocial,
} from './styles'

interface ProfileProps {
  data?: UserProps | null
  isLoading?: boolean
}

export function Profile({ data, isLoading }: ProfileProps) {
  if (isLoading) return <p>Loading...</p>

  return (
    <ProfileContainer>
      <ProfileContent>
        <ProfileAvatar>
          <img src={data?.avatar_url} alt={data?.name || ''} />
        </ProfileAvatar>
        <div>
          <ProfileHeader>
            <h2>Andrelino Silva</h2>
            <Link to={data?.html_url || ''} target="_blank">
              GITHUB
            </Link>
          </ProfileHeader>
          <p>{data?.bio}</p>
          <ProfileSocial>
            <Link to={data?.html_url || ''} target="_blank">
              <FaGithub /> {data?.login}
            </Link>
            {data?.company && (
              <span>
                <FaBuilding /> {data?.company}
              </span>
            )}
            <Link to={`${data?.html_url}/?tab=followers` || ''} target="_blank">
              <FaUserGroup /> {String(data?.followers) || '0'} seguidores
            </Link>
            <Link to={`${data?.html_url}/?tab=following` || ''} target="_blank">
              <FaUserGroup /> {String(data?.following) || '0'} seguindo
            </Link>
          </ProfileSocial>
        </div>
      </ProfileContent>
    </ProfileContainer>
  )
}
