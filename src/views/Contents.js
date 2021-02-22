import React from 'react'
import { Container, Row, Col, Progress } from 'reactstrap'
import { Accordion, Card } from 'react-bootstrap'
import '../assets/css/content.css'

const Contents = () => {
  return (
    <Container>
      <Row>
        <Col sm="6">
          <div className="small__title">MÉTODO REMOTO 3.0</div>
          <div className="title">Conteúdos</div>
          <div className="detail mt-2">
            Treinamento MR 3.0 foi criado para ajudar pessoas a conseguirem
            prestar serviço online.
          </div>
          <div className="time mt-3">
            <i className="fa fa-play-circle"></i>&nbsp; 4h 4m &nbsp;
            <i className="fa fa-play-circle"></i>&nbsp; 8 aulas
          </div>
          <div className="mt-3">
            <Progress width="80%" value="25" />
          </div>
          <div className="mt-3">
            <button className="edit__btn" outline>
              Editar curso &nbsp;
              <i className="fa fa-edit"></i>
            </button>
            <div class="dropdown">
              <button className="plus__btn" outline>
                Adicionar &nbsp;
                <i className="fa fa-plus"></i>
              </button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
              </div>
            </div>
          </div>
        </Col>
        <Col sm="6">
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Click me!
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Click me!
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
    </Container>
  )
}

export default Contents
