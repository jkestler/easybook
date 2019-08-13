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
          <ModalHeader className='m-auto display-4'> <em> {this.props.bookmarkTitle} </em> </ModalHeader>
          <ModalBody>
           <h6> Description: </h6>
           <h4>  <em>{this.props.bookmarkDescription } </em></h4>
           <img id='show-bookmark-img' src={this.props.bookmarkScreenshot} alt='screenshot' />
           <a target='_blank' rel='noopener noreferrer' href={this.props.bookmarkUrl}> <h4> {this.props.bookmarkUrl} </h4> </a>
          </ModalBody>
          <button className='btn btn-primary' onClick={this.props.toggleShowBookmark}> Close </button> 
        </Modal>
      </div>
    )
  

  }
}
export default ShowBookmark; 