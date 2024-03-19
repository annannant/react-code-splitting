import { Link } from "react-router-dom"
import { Container } from "./Sidebar.styles"

export const Sidebar = () => {
  return <Container>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/calculate">Calculate</Link></li>
    </ul>
  </Container>
}