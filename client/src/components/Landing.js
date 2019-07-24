import React from 'react';
import folderIcon from '../assets/img/landing-folder.png';
import tagIcon from '../assets/img/landing-tag1.png';
import searchIcon from '../assets/img/landing-search.png';
import { render } from 'react-dom';
import IosArrowDropdown from 'react-ionicons/lib/IosArrowDropdown';


const Landing = (props) => {
  return (
    <div className='container'>
        <div className='row'>
          <div className='col-lg-12' id='heading-text' >
             <h1 className="header text-white" > Simple. Intuitive. <em>Easy.</em>  </h1>
             <h1 className='text-white'> Bookmarking done right. </h1>
          </div>
        </div>
        <div className='row' id='heading-row'>
          <div className='col-lg-4 col-sm-12'>
            <div class="card bg-info">
              <img class="card-img-top" src={folderIcon} alt="search icon"/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-12'>
            <div class="card bg-info">
              <img class="card-img-top" src={searchIcon} alt="tag icon"/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-12'>
            <div class="card bg-info">
              <img class="card-img-top" src={tagIcon} alt="folder icon"/>
               <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
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