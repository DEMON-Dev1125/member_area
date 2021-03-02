import React from "react";
import { Container, Row, Col, Progress } from "reactstrap";
import "../assets/css/content.css";

import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Contents = () => {
  const classes = useStyles();

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
            <button className="edit__btn mr-2" outline>
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
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Introdução</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                  <ListItemIcon>
                    <img src="../../assets/svg/play.svg" />
                  </ListItemIcon>
                  <ListItemText primary="Inbox" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <DraftsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Drafts" />
                </ListItem>
              </List>
              <Divider />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Contents;
