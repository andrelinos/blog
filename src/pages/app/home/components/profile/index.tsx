import { FaBuilding, FaGithub, FaUserGroup } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

import {
  ProfileAvatar,
  ProfileContainer,
  ProfileContent,
  ProfileHeader,
  ProfileSocial,
} from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileContent>
        <ProfileAvatar>
          <img src="https://github.com/andrelinos.png" alt="" />
        </ProfileAvatar>
        <div>
          <ProfileHeader>
            <h2>Andrelino Silva</h2>
            <Link to="https://github.com/andrelinos">GITHUB</Link>
          </ProfileHeader>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <ProfileSocial>
            <Link to="#">
              <FaGithub /> andrelinos
            </Link>
            <Link to="#">
              <FaBuilding /> Rocketseat
            </Link>
            <Link to="#">
              <FaUserGroup /> 32 seguidores
            </Link>
          </ProfileSocial>
        </div>
      </ProfileContent>
    </ProfileContainer>
  )
}
