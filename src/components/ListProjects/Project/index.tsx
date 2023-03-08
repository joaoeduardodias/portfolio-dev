import Image from 'next/image'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { TbWorldUpload } from 'react-icons/tb'
import {
  ExternalLink,
  ImageContainer,
  ProjectContainer,
  ProjectDetails,
  TagsContainer,
} from './styles'

interface ProjectProps {
  title: string
  description: string
  image: string
  link_web?: string
  link_github: string
}

export function Project({
  description,
  image,
  link_github,
  title,
  link_web,
}: ProjectProps) {
  return (
    <ProjectContainer hasLink_web={link_web != undefined}>
      <ImageContainer>
        {link_web ? (
          <>
            <TbWorldUpload />
            <Link href={String(link_web)} target="_blank">
              <Image src={image} alt="" width={416} height={220} />
            </Link>
            <p>Ver online</p>
          </>
        ) : (
          <Image src={image} alt="" width={416} height={220} />
        )}
      </ImageContainer>
      <ProjectDetails>
        <TagsContainer>
          <li>React</li>
          <li>Next</li>
          <li>Styled-components</li>
        </TagsContainer>
        <strong>{title}</strong>
        <p>{description}</p>
        <ExternalLink>
          <a href={link_github} target="_blank" rel="noreferrer">
            <span>ver no github</span>
            <FaExternalLinkAlt />
          </a>
        </ExternalLink>
      </ProjectDetails>
    </ProjectContainer>
  )
}
