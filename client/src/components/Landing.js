import React from 'react';
import { 
  Jumbotron, 
  Button, 
  Container, 
  Row, 
  Card, 
  CardTitle, 
  CardText,
  Col
 } from 'reactstrap';
import folderIcon from '../assets/img/landing-folder.png';
import tagIcon from '../assets/img/landing-tag.png';
import searchIcon from '../assets/img/landing-search.png';


const Landing = (props) => {
  return (
    <div className="landing">
      <div className="landing-background"></div>
      <div className="heading-text">
        <h1 className="header"> Simplify your browsing experience with easyBook. </h1>
        <h3> An intuitive organizational tool for all your bookmarks. </h3>
        <Button> Sign Up! </Button>
      </div>
      <div className="landing-features"> 
        <div className="row feature-row">

          <Col lg="4" md="12" className="feature-column" >
              <img src={folderIcon} alt="folder"/>
              <p> Organize your bookmarks into customizable folders and access them easily with folder filtering </p>
          </Col>

          <Col lg="4" md="12"  className="feature-column">
            <img src={searchIcon} alt="tag" /> 
            <p>Search for your bookmarks in real-time</p> 
            
          </Col>

          <Col lg="4" md="12" className="feature-column">
            <img src={tagIcon} alt="search"/>
            <p> Add re-usable tags to your bookmarks to link resources in different folders </p>
            
          </Col>



        </div>
      </div>
    </div>
  )
};

export default Landing;


      {/* /* <div className="landing-features">
        <h4> Organize your life with easyBook  </h4>
        <Row className="feature-row">
          <Col lg="6" sm="12">
           <p> Organize your bookmarks into customizable folders and access them easily with folder filtering </p>
          </Col>
          <Col lg="6" sm="12">
           <img src={folderIcon} alt="folder"/>
          </Col>
        </Row>
        <Row className="feature-row">
          <Col lg="6" sm="12">
            <img src={tagIcon} alt="tag" /> 
          </Col>
          <Col lg="6" sm="12">
            <p> Add re-usable tags to your bookmarks to link resources in different folders</p>
          </Col>
        </Row> */} 
   {/* <div className="landing">
      <div className="jumbotron">
        <Jumbotron fluid>
          <Container fluid className="jumboContainer">
            <h1 className="display-3">Welcome to easyBook</h1>
            <p className="lead">An intuitive organization tool for all of your bookmarks.</p>
            <Button> Sign Up! </Button>
          </Container>
        </Jumbotron>
      </div>
      <h1 className="feature-header"> Organize all of your bookmarks </h1>
      <div className="feature-cards">
        <Row> 
          <Col lg="6" md="12" className="feature"> 
              <h4> This is the first feature</h4>
          </Col>
          <Col lg="6" md="12" className="feature">
            <h4> This is the second feature</h4>
          </Col>
          <Col lg="4" md="12" className="feature">
            <h4> This is the third feature</h4>  
          </Col>
        </Row>
      </div>
    </div> */}
  //  <Col className="landingCard" lg="4" sm="12">
  //         <Card body>
  //           <CardTitle>Special Title Treatment</CardTitle>
  //           <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
  //           <Button>Go somewhere</Button>
  //         </Card>
  //       </Col>
  //       <Col className="landingCard" lg="4" sm="12">
  //         <Card body>
  //           <CardTitle>Special Title Treatment</CardTitle>
  //           <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
  //           <Button>Go somewhere</Button>
  //         </Card>
  //       </Col>
  //       <Col className="landingCard" lg="4" sm="12">
  //         <Card body>
  //           <CardTitle>Special Title Treatment</CardTitle>
  //           <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
  //           <Button>Go somewhere</Button>
  //         </Card>
  //       </Col>