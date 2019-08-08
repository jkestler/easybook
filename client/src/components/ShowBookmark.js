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
          </ModalBody>
          <button className='btn btn-primary' onClick={this.props.toggleShowBookmark}> Close </button> 
        </Modal>
      </div>
    )
  

  }
}
export default ShowBookmark; 