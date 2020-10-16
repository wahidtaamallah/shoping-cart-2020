import React from "react";
import { Jumbotron, Container } from "reactstrap";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid className="p-3">
          <h6>Bienvenue dans le vestiaire de votre club préféré</h6>
          <img src="https://www.univers-du-foot.com/media/wysiwyg/univers-du-foot/img/fond.jpg" alt="this is fond" width="100%" height="100%" />
          <p className="lead">This is our and only page</p>
          
        </Container>
      </Jumbotron>
    </div>
  );

};
export default Home;
