// import { parse } from "path";
import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import FolderIcon from 'react-ionicons/lib/IosFolderOpenOutline';
import AddBookmark from './AddBookmark.js';

class Bookmarks extends Component {
  constructor(props) {
  super(props);
  this.state = {
    toggle: false,
    folderName: '',
    userEmail: {},
    userFolders: [],
    userBookmarks: {},
    showAddBookmark: false,
    currentFolder: '',
    folderBookmarks: []
  }
}

  toggleAddBookmark = () => {
    this.setState({
      showAddBookmark: !this.state.showAddBookmark
    });
    console.log(this.state.showAddBookmark);
  }

  toggleClass = () => {
    this.state.toggle ? this.setState({ toggle: false}) : this.setState({ toggle: true})
  }

  componentDidMount = () => {
    axios.get(`/user/${JSON.parse(localStorage.getItem('id'))}`)
    .then(res => {
      console.log('RES.DATA', res);
      this.setState({ 
        userEmail: res.data.result.user.email,
        userFolders: res.data.result.user.folders,
        userBookmarks: res.data.result.user.folders.bookmarks
      })
      console.log(this.state);
    })
  }


  handleFolderSubmit = (e) => {
    e.preventDefault();
    axios.post('/folders/create', {
        folderName: this.state.folderName,
        // userId: 180
      })
      .then((res) => {
        axios.get(`/user/${JSON.parse(localStorage.getItem('id'))}`)
        .then(response => {
          // console.log('RES.DATA', res);
          this.setState({ 
            userFolders: response.data.result.user.folders,
          })
      });
    })
  }

  handleFolderChange = (e) => {
    // e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  showFolder = (id) => {
    axios.get(`/folders/${id}`)
    .then((res) => {
      this.setState({
        folderBookmarks: res.data.folder.bookmarks
      })
      console.log(this.state.folderBookmarks);
    })
  }

render() {

  // this.bookmarkRow = [this.state.folderBookmarks[index-1], this.state.folderBookmarks[index], this.state.folderBookmarks[index+1]];
  
return (

  <div className={(this.state.toggle ? 'd-flex toggled' : 'd-flex')} id='wrapper'>

    <div className="mr-2" id="sidebar-wrapper">
    <button className="btn btn-primary btn-sm" onClick={this.toggleClass} id="menu-toggle">Toggle Sidebar</button>
      <div className="list-group list-group-flush">
      
        <form className="form-inline list-group my-2 my-lg-0" id='search-input' >
          <input className="form-control m-0" type="search" placeholder="Search Bookmarks..." aria-label="Search" />
        </form>
        <button className='btn  btn-block btn-primary my-2' onClick={this.toggleAddBookmark} > Add Bookmark</button>
        <h5> Folders: </h5> 

        <form className="form-inline list-group my-2 my-lg-0" onSubmit={this.handleFolderSubmit} id='search-input' >
          <input className="form-control mb-2" type="text" name='folderName' value={this.state.folderName} onChange={this.handleFolderChange} placeholder="Add folder..." />
        </form>
        
        {
          this.state.userFolders.map((folder, index) => (
            <div key={index}>
              <button onClick={() => this.showFolder(folder.id)} className="list-group-item list-group-item-action bg-dark text-white"><FolderIcon className='mr-3'color="#ffffff"/>{folder.folderName}</button>
            </div>
          ))
        }
        <a href="/" className="list-group-item list-group-item-action bg-dark text-white"><FolderIcon className='mr-3'color="#ffffff"/>Documentation</a>
        <a href="/" className="list-group-item list-group-item-action bg-dark text-white"><FolderIcon className='mr-3'color="#ffffff"/>Courses</a>
        <a href="/" className="list-group-item list-group-item-action bg-dark text-white"><FolderIcon className='mr-3'color="#ffffff"/>Github</a>
        <a href="/" className="list-group-item list-group-item-action bg-dark text-white"><FolderIcon className='mr-3'color="#ffffff"/>Jobs</a>
        
      {this.state.showAddBookmark ?  <AddBookmark userFolders={this.state.userFolders} toggleAddBookmark={this.toggleAddBookmark} showAddBookmark={this.state.showAddBookmark} /> : '' }
      </div>
    </div>
    
    <div id="page-content-wrapper">

      <div className="container-fluid" id='bookmark-container'>
        {
          this.state.folderBookmarks.map((bookmark, index) => {

          })
        }
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