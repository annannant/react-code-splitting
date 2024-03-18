import { Link } from "react-router-dom"
import { Container } from "./Sidebar.styles"

export const Sidebar = () => {
  return <Container>
    <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/team-task">Team-Task</Link></li>
      <li><Link to="/follow-up">Follow up</Link></li>
      <li><Link to="/report">Report</Link></li>
    </ul>
  </Container>
}