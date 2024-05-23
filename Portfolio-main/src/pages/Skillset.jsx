import React from "react";
import { Container } from "react-bootstrap";
import Techstack from "../components/Skillset/Techstack";


const Skillset = () => {
  return (
    <Container fluid className="about-section">
      
      <Container>
        <h1 className="project-heading">
          Professional <strong className="yellow">Skillset </strong>
        </h1>

        <Techstack />
      </Container>
    </Container>
  )
}

export default Skillset