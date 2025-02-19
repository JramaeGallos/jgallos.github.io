import { useState } from "react";
import { Modal, Button, Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import swImg1 from "../assets/img/sw_menu.png";
import swImg2 from "../assets/img/sw_game.png";
import swImg3 from "../assets/img/sw_game2.png";
import ticImg1 from "../assets/img/tic_img1.png";
import ticImg2 from "../assets/img/tic_img2.png";
import ticImg3 from "../assets/img/tic_img3.png";
import lmaoImg1 from "../assets/img/lmao_img1.png";
import lmaoImg2 from "../assets/img/lmao_img2.png";
import lmaoImg3 from "../assets/img/lmao_img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const [modalDescription, setModalDescription] = useState("");

  const handleShowModal = (imgUrl, description) => {
    setModalImg(imgUrl);
    setModalDescription(description);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const SW_projects = [
    { title: "Menu Page", description: "Player can choose to start a new game or read game background.", imgUrl: swImg1 },
    { title: "Game Page", description: "The shuttle needs to survive by shooting the aliens or collecting power-ups to gain health.", imgUrl: swImg2 },
    { title: "Game Page", description: "Be ready for a master alien that might eat you alive.", imgUrl: swImg3 }
  ];

  const TIC_projects = [
    { title: "Menu Page", description: "Player can choose to play as X or O.", imgUrl: ticImg1 },
    { title: "Game Page", description: "The player is playing against an unbeatable AI agent.", imgUrl: ticImg2 },
    { title: "Game Page", description: "Don't waste your time playing this game because losing is a sure thing.", imgUrl: ticImg3 }
  ];

  const LMAO_projects = [
    { title: "Hello World", description: "Executes properly given proper syntax.", imgUrl: lmaoImg1 },
    { title: "Simple Commands", description: "Can handle common programming functions such as variable declaration, user input, printing statements, conditional statements, arithmetic logic, and more.", imgUrl: lmaoImg2 },
    { title: "Error Detection", description: "Prompts descriptive syntax errors encountered by the program.", imgUrl: lmaoImg3 }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>I am interested in developing projects involving game development, full-stack web and mobile development, AI applications, and more.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                      <Nav.Item>
                        <Nav.Link eventKey="first">eLICOM</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Space Warrior</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tic-Tac-Toe with AI</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">LMAO Code</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fifth">Outbreak</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="sixth">Outbreak</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="second">
                        <Row>
                          <p>A shooting game developed in JAVA using the concept of OOP.</p>
                        </Row>
                        <Row>
                          {SW_projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                              onClick={() => handleShowModal(project.imgUrl, project.description)}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          <p>A Tic-Tac-Toe game developed in Python. This project uses the concept of the Minimax algorithm as an application of artificial intelligence.</p>
                        </Row>
                        <Row>
                          {TIC_projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                              onClick={() => handleShowModal(project.imgUrl, project.description)}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <Row>
                          <p>A group project that uses Python to develop a LOLCode interpreter.</p>
                        </Row>
                        <Row>
                          {LMAO_projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                              onClick={() => handleShowModal(project.imgUrl, project.description)}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />

      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Body className="d-flex justify-content-center align-items-center">
          <div style={{ maxHeight: "70vh", maxWidth: "100%", overflow: "auto" }}>
            <img src={modalImg} alt="Zoomed Project" className="img-fluid" style={{ maxWidth: "100%", maxHeight: "70vh", objectFit: "contain" }} />
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between w-100">
          <span className="text-muted">{modalDescription}</span>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>

    </section>
  );
};
