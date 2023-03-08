import { Project } from './Project'
import { ListProjectsContainer } from './styles'

interface ListProjectProps {
  projects: {
    id: string
    title: string
    description: string
    image: string
    link_web?: string
    link_github: string
    technologies: string[]
  }[]
}

export function ListProjects({ projects }: ListProjectProps) {
  return (
    <ListProjectsContainer>
      <h2>Principais projetos</h2>

      <ul>
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </ul>
    </ListProjectsContainer>
  )
}
