// import { parse } from "path";
import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import FolderIcon from 'react-ionicons/lib/IosFolderOpenOutline';
import AddBookmark from './AddBookmark.js';
import ShowBookmark from './ShowBookmark.js';

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
    folderBookmarks: [],
    bookmark: [],
    showBookmark: false
  }
}

  toggleAddBookmark = () => {
    this.setState({
      showAddBookmark: !this.state.showAddBookmark
    });
    console.log(this.state.showAddBookmark);
  }

  toggleShowBookmark = () => {
    this.setState({
      showBookmark: !this.state.showBookmark
    });
    console.log(this.state.showBookmark);
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
      axios.get(`/folders/${JSON.parse(localStorage.getItem('folderId'))}`)
      .then((folders) => {
        console.log(this.state);
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
      localStorage.setItem('folderId', id);
      this.setState({
        folderBookmarks: res.data.folder.bookmarks
      })
      console.log(this.state.folderBookmarks);
    })
  }

  showBookmark = (id) => {
    this.toggleShowBookmark();
    axios.get(`/folders/${JSON.parse(localStorage.getItem('folderId'))}/bookmark/${id}`)
    .then((res) => {
      this.setState({
        bookmark: res.data.bookmark
      });
      console.log(res);
    })
  }

render() {

  // this.bookmarkRow = [this.state.folderBookmarks[index-1], this.state.folderBookmarks[index], this.state.folderBookmarks[index+1]];
  
  return (
    
    <div className={(this.state.toggle ? 'd-flex toggled' : 'd-flex')} id='wrapper'>
      {this.state.showBookmark ? <ShowBookmark  bookmarkUrl={this.state.bookmark.url} bookmarkDescription={this.state.bookmark.description} bookmarkScreenshot={this.state.bookmark.screenshot} bookmarkTitle={this.state.bookmark.title} toggleShowBookmark={this.toggleShowBookmark} /> : '' }
      <div className="mr-2" id="sidebar-wrapper">
        <button className="btn btn-primary btn-sm" onClick={this.toggleClass} id="menu-toggle">Toggle Sidebar</button>
        <div id='folder-list' className="list-group list-group-flush">
        
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
          
          {this.state.showAddBookmark ?  <AddBookmark showFolder={this.showFolder} userFolders={this.state.userFolders} toggleAddBookmark={this.toggleAddBookmark} showAddBookmark={this.state.showAddBookmark} /> : '' }
         
        </div> 
      </div>
      
      <div id="page-content-wrapper">

        <div id='bookmark-container' className='container-fluid'>

          {
            this.state.folderBookmarks.map((bookmark, index) => (    
              <div className='bookmark-box' key={index} onClick={() => this.showBookmark(bookmark.id)} >  
                <div className='bookmark-card' style={{backgroundImage: `url(${bookmark.screenshot})`}}>
                  <div id='bookmark-img' className='card-body'>
                    <h5 className='card-title'> { bookmark.title } </h5>
                  </div>
                </div>
               </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}
}
    export default Bookmarks;

