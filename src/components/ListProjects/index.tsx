import { Project } from './Project'
import { ListProjectsContainer } from './styles'

export function ListProjects() {
  return (
    <ListProjectsContainer>
      <h2>Principais projetos</h2>

      <ul>
        <Project />
        <Project />
        <Project />
        <Project />
      </ul>
    </ListProjectsContainer>
  )
}
