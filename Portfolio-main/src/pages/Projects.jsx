import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import FYP from '../assets/projects/FYP.gif'
import WEBSTORE from '../assets/projects/WEBSTORE.gif'
import DOSSHELL from "../assets/projects/dos.gif"
import EXCEL from "../assets/projects/excel.gif"
import CAFE from "../assets/projects/cafeteria.gif"
const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="Project Heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col xs={6} md={4} className="tech-icons">
            <ProjectCard
              URL="https://github.com/burhanahmad161/Cafeteria-Management-System"
              className="ProjectCard"
              imgPath={CAFE}
              isBlog={false}
              title="CAFE"
              description="The project is designed to manage a cafeteria. Admin can Add,Update,Delete Products in the cafe and the users can buy products from this. After buying the products user can also leave a review about the product."
            />
          </Col>

          <Col xs={6} md={4} className="tech-icons">
            <ProjectCard
              URL="https://github.com/burhanahmad161/DOS-Shell.git"
              imgPath={DOSSHELL}
              isBlog={false}
              title="DSA MidProject"
              description="This is mini DOS Shell made by using different data structures like tree,linkedlist etc. It also contains a text editor."
            />
          </Col>

          <Col xs={6} md={4} className="tech-icons">
            <ProjectCard
              URL="https://github.com/burhanahmad161/EcommerceStore.git"
              imgPath={WEBSTORE}
              isBlog={false}
              title="Endless Runner"
              description="project involved developing a game called Endless Runner on the Unity game engine. The project enabled him to learn various basic techniques of game development, such as designing game levels, creating game objects, implementing game mechanics, and integrating sound effects. The Endless Runner game had a simple objective of running as far as possible without colliding with obstacles, and the game difficulty increased as the player progressed. The project allowed Abdul Sami to gain hands-on experience in game development and paved the way for further exploration of the game development field."
            />
          </Col>
          <Col xs={6} md={4} className="tech-icons">
            <ProjectCard
              URL="https://github.com/burhanahmad161/FYP-Mangamenet-System"
              imgPath={FYP}
              isBlog={false}
              title="FYP Management System"
              description="The project involved the development of a desktop-based application that utilized SQL for efficient management of student records, faculty information, course details, and attendance tracking for a department. This console-based application provided an intuitive and user-friendly interface, which streamlined data management for department staff. Through this project, the practical applications of database management were showcased, emphasizing its significance in real-world scenarios. By utilizing SQL for data storage, retrieval, and manipulation, the project highlighted the numerous benefits of database management in the modern era, such as improved data security, easy data access, and efficient data manipulation."
            />
          </Col>
          <Col xs={6} md={4} className="tech-icons">
            <ProjectCard
              URL="https://github.com/burhanahmad161/Mini-Excel-Project.git"
              imgPath={EXCEL}
              isBlog={false}
              title="Instagram Ui Clone"
              description="This is a mini Excel desginged by using quad linked list data structure."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  )
}

export default Projects