import projectImg from '@/assets/projectImg.png'
import Image from 'next/image'
import { ProjectContainer, TagsContainer } from './styles'

export function Project() {
  return (
    <ProjectContainer>
      <Image src={projectImg} alt="" width={416} height={220} />
      <div>
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
      </div>
    </ProjectContainer>
  )
}
