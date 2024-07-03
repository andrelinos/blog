import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

import { FooterContainer } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      Criado por Andrelino Silva
      <div>
        <Link to="https://github.com/andrelinos" target="_blank">
          <FaGithub /> andrelinos
        </Link>
        <Link to="https://www.linkedin.com/in/andrelinosilva" target="_blank">
          <FaLinkedin /> andrelinosilva
        </Link>
        <Link
          to="https://discord.com/channels/@me/601842330819100684"
          target="_blank"
        >
          <FaDiscord /> andrelinos
        </Link>
      </div>
    </FooterContainer>
  )
}
