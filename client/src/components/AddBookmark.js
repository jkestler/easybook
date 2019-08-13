import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';


class AddBookmark extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      title: '',
      description: '',
      screenshot: '',
      folderId: null,
      modal: false
    }
  }

  

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.toggleAddBookmark();
    axios.post(`folders/${this.state.folderId}/bookmark/create`, {
      url: this.state.url,
      title: this.state.title,
      description: this.state.description,
      screenshot: this.state.screenshot
    })
    .then((res) => {
      this.props.showFolder(JSON.parse(localStorage.getItem('folderId')));
      axios.get(`/user/${JSON.parse(localStorage.getItem('id'))}/bookmarks`)
      .then((bookmarks) => {
        this.props.updateSearch(bookmarks.data.bookmarks);
      })
    })

  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value,
    });
  }

  handleSelectChange = (e) => {
    this.setState({
      folderId: e.target.value
    });
  }

  handleScreenshotChange = (e) => {
    this.setState({
      screenshot: e.target.value
    })
  }


  render() {
    
    return (
      <div> 
        <Modal isOpen={true} > 
          <ModalHeader className='m-auto'> Add Bookmark </ModalHeader>
          <ModalBody>
            <form className="form-inline list-group my-lg-0" id='search-input' onSubmit={this.handleSubmit}>
              <input className="form-control m-1" type="text" placeholder="Title" name='title' onChange={this.handleChange} value={this.state.title} />
              <input className="form-control m-1" type="text" placeholder="URL" name='url' onChange={this.handleChange} value={this.state.url}/>
              <textarea id='textarea' rows='2' className="form-control m-1" type="text" name ='description' placeholder="Description" onChange={this.handleChange} value={this.state.description}/>
              <input className="form-control m-1" type="text" placeholder="Screenshot URL (optional)" name='screenshot' onChange={this.handleChange} value={this.state.screenshot} />
              <select id='folderSelect' className='custom-select my-lg-0' onChange={this.handleSelectChange}>
                <option defaultValue> Choose folder...</option>
                {
                  this.props.userFolders.map((folder, index) => (
                    <option key={index} name='folderId' value={folder.id} > { folder.folderName } </option>
                  ))
                }
                </select>
              <button type='submit' className='btn  btn-block btn-primary my-2' onClick={this.showBookmarks} > Add Bookmark</button>
              <button className='btn  btn-block btn-danger my-2' onClick={this.props.toggleAddBookmark}> Cancel </button>
            </form>
          </ModalBody>

        </Modal>
      </div>
    )
  

  }
}
export default AddBookmark; 