import projectImg from '@/assets/projectImg.png'
import Image from 'next/image'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { TbWorldUpload } from 'react-icons/tb'
import {
  ExternalLink,
  ImageContainer,
  ProjectContainer,
  ProjectDetails,
  TagsContainer,
} from './styles'
export function Project() {
  return (
    <ProjectContainer>
      <ImageContainer>
        <TbWorldUpload />
        <Image src={projectImg} alt="" width={416} height={220} />
        <a>Ver online</a>
      </ImageContainer>
      <ProjectDetails>
        <TagsContainer>
          <li>React</li>
          <li>Next</li>
          <li>Styled-components</li>
        </TagsContainer>
        <strong>Projeto 01</strong>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          accusantium alias aut? Sequi optio ipsa impedit. Deleniti soluta harum
          voluptatibus.
        </p>
        <ExternalLink>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <span>ver no github</span>
            <FaExternalLinkAlt />
          </a>
        </ExternalLink>
      </ProjectDetails>
    </ProjectContainer>
  )
}
