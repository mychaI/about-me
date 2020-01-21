import React from 'react';
import Popup from 'reactjs-popup';

const Modal = props => (
  <Popup open={props.open} closeOnDocumentClick onClose={props.closeModal}>
	<div className='modal'>
	  <a className='close' onClick={props.closeModal}>
		&times;
	  </a>
	  {props.modalText}
	</div>
  </Popup>
);

export default Modal;
