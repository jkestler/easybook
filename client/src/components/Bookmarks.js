// import { parse } from "path";

import React, { Component } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
import $ from 'jquery';

class Bookmarks extends Component {
  constructor(props) {
  super(props);
  this.state = {
    toggle: false
  }
}

  toggleClass = () => {
    this.state.toggle ? this.setState({ toggle: false}) : this.setState({ toggle: true})
  }
     // let css = (this.state.toggle === 'hidden') ? 'toggle' : 'hidden'
    // this.setState({
    //   toggleClass: css
    // })

// toggleSideNav = () => {
//   const css = (this.state.showHideSidenav === 'hidden') ? 'show' : 'hidden';
//    this.setState({ 'showHideSidenav': css});
//   $('#menu-toggle').click( function(e) {
//     e.preventDefault();
//     $('#wrapper').toggleClass('toggled');
//   })
// }

render() {
  
return (

  <div className={(this.state.toggle ? 'd-flex toggled' : 'd-flex')} id='wrapper'>

    <div className="mt-1" id="sidebar-wrapper">
      <div className="sidebar-heading">Folders </div>
      <div className="list-group list-group-flush">
        <a href="/" className="list-group-item list-group-item-action bg-dark text-white">Bootstrap</a>
        <a href="/" className="list-group-item list-group-item-action bg-dark text-white">Bloc</a>
        <a href="/" className="list-group-item list-group-item-action bg-dark text-white">Documentation</a>
        <a href="/" className="list-group-item list-group-item-action bg-dark text-white">Courses</a>
        <a href="/" className="list-group-item list-group-item-action bg-dark text-white">Github</a>
        <a href="/" className="list-group-item list-group-item-action bg-dark text-white">Jobs</a>
      </div>
    </div>
    
    <div id="page-content-wrapper">

      <nav className="navbar navbar-expand-lg navbar-light">
        <button className="btn btn-primary" onClick={this.toggleClass} id="menu-toggle">Toggle</button>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
       
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav ml-auto mt-2 mt-lg-0">
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
            </form> 
          </div>
        </div>
      </nav>

      <div classNameName="container-fluid">
        <div className="row mt-2">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Bookmark 1</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="/" className="btn btn-primary">View / Edit</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Bookmark 2</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="/" className="btn btn-primary">View / Edit </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Bookmark 3</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="/" className="btn btn-primary"> View / Edit </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Bookmark 1</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="/" className="btn btn-primary">View / Edit</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Bookmark 2</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="/" className="btn btn-primary">View / Edit </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Bookmark 3</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="/" className="btn btn-primary"> View / Edit </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Bookmark 1</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="/" className="btn btn-primary">View / Edit</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Bookmark 2</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="/" className="btn btn-primary">View / Edit </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Bookmark 3</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="/" className="btn btn-primary"> View / Edit </a>
              </div>
            </div>
          </div>
        </div>
      </div> {/* End Container-fluid */}




    </div>
  </div>


)
}


}

export default Bookmarks;

/*<div className='container-fluid'>
  <div className='row'>
    <div className='col-sm-3 px-1 bg-dark'>
      <div className='py-2 sticky-top flex-grow-1'>
        <div className='nav flex-sm-column'>
          <a href='/' className='nav-link'>Link</a>
          <a href='/' className='nav-link'>Link</a>
          <a href='/' className='nav-link'>Link</a>
          <a href='/' className='nav-link'>Link</a>
          <a href='/' className='nav-link'>Link</a>
          <a href='/' className='nav-link'>Link</a>
        </div>
      </div>
    </div>
    <div class="col" id="main">
      <h1>Main Area</h1>
      <p>Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code editing brunch.
        Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape swag wolf squid tote
        bag. Tote bag cronut semiotics,
        raw denim deep v taxidermy messenger bag. Tofu YOLO Etsy, direct trade ethical Odd Future jean shorts paleo.
        Forage Shoreditch tousled aesthetic irony, street art organic Bushwick artisan cliche semiotics ugh synth
        chillwave meditation.
        Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY
        90's blog.</p>

      <p>Ethical Kickstarter PBR asymmetrical lo-fi. Dreamcatcher street art Carles, stumptown gluten-free Kickstarter
        artisan Wes Anderson wolf pug. Godard sustainable you probably haven't heard of them, vegan farm-to-table
        Williamsburg slow-carb
        readymade disrupt deep v. Meggings seitan Wes Anderson semiotics, cliche American Apparel whatever. Helvetica
        cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's
        Shoreditch selfies,
        forage fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland.</p>

      <p>Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code editing brunch.
        Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape swag wolf squid tote
        bag. Tote bag cronut semiotics,
        raw denim deep v taxidermy messenger bag. Tofu YOLO Etsy, direct trade ethical Odd Future jean shorts paleo.
        Forage Shoreditch tousled aesthetic irony, street art organic Bushwick artisan cliche semiotics ugh synth
        chillwave meditation.
        Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY
        90's blog.</p>

      <p>Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code editing brunch.
        Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape swag wolf squid tote
        bag. Tote bag cronut semiotics,
        raw denim deep v taxidermy messenger bag. Tofu YOLO Etsy, direct trade ethical Odd Future jean shorts paleo.
        Forage Shoreditch tousled aesthetic irony, street art organic Bushwick artisan cliche semiotics ugh synth
        chillwave meditation.
        Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY
        90's blog.</p>
    </div>
  </div>
</div> */