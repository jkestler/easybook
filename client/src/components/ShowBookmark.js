import React  from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';


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
           <Link to={{pathname: this.props.bookmarkUrl}}> <h4> {this.props.bookmarkUrl} </h4> </Link>
          </ModalBody>
          <button className='btn btn-primary' onClick={this.props.toggleShowBookmark}> Close </button> 
        </Modal>
      </div>
    )
  

  }
}
export default ShowBookmark; 