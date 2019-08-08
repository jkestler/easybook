import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';


class ShowBookmark extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      title: '',
      description: '',
      screenshotURL: '',
      folderId: null,
      modal: false
    }
  }

  

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.toggleAddBookmark();
  //   axios.post(`folders/${this.state.folderId}/bookmark/create`, {
  //     url: this.state.url,
  //     title: this.state.title,
  //     description: this.state.description,
  //     screenshot: this.state.screenshotURL,
  //   })
  //   .then((res) => {
  //     this.props.showFolder(JSON.parse(localStorage.getItem('folderId')));
  //   })

  // }

  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name] : e.target.value,
  //   });
  // }

  // handleSelectChange = (e) => {
  //   this.setState({
  //     folderId: e.target.value
  //   });
  // }

  // showBookmarks = () => {
  //   axios.get(`/folders/${this.state.folderId}`)
  // }

 
  render() {
    
    return (
      <div> 
        <Modal isOpen={true}> 
          <ModalHeader className='m-auto'> {this.props.bookmarkTitle} </ModalHeader>
          <ModalBody>
           <h2> Description:</h2>
           <p>  {this.props.bookmarkDescription } </p>
           <img src={this.props.bookmarkScreenshot} alt='screenshot' />
           <a target='_blank' rel='noopener noreferrer' href={this.props.bookmarkUrl}> {this.props.bookmarkUrl} </a>
           <h2> {this.props.bookmarkScreenshot} </h2>
           {/* <img src='https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/4116/s200/alex.png' alt='img' /> */}
          </ModalBody>
          <button className='btn btn-primary' onClick={this.props.toggleShowBookmark}> Close </button> 
        </Modal>
      </div>
    )
  

  }
}
export default ShowBookmark; 