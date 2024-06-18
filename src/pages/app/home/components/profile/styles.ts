import styled from 'styled-components'

export const ProfileContainer = styled.header`
  position: relative;
  height: 160px;
`

export const ProfileContent = styled.div`
  width: 864px;
  height: 212px;
  z-index: 1;
  overflow: hidden;

  background: ${(props) => props.theme['base-profile']};
  color: ${(props) => props.theme['base-title']};
  border-radius: 10px;
  margin: -100px auto;
  padding: 32px;
  z-index: 99;

  display: flex;
  align-items: center;
  gap: 16px;

  > div > p {
    color: ${(props) => props.theme['base-text']};
  }
`

export const ProfileAvatar = styled.div`
  border: 1px solid ${(props) => props.theme.blue};
  border-radius: 10px;
  padding: 4px;
  width: 148px;
  height: 148px;
  min-width: 148px;

  img {
    border-radius: 10px;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      text-underline-offset: 5px;
      transition: all 0.3s ease-in-out;
    }
  }
`

export const ProfileSocial = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 24px;

  a {
    color: ${(props) => props.theme['base-subtitle']};
    text-decoration: none;
    display: flex;
    gap: 4px;
    align-items: center;

    &:hover {
      text-decoration: underline;
      text-underline-offset: 5px;
      transition: all 0.3s ease-in-out;
    }

    svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
