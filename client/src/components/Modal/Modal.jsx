import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const Mayor = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(true);

  // function openModal() {
  //   setIsOpen(true);
  // }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#cccc';
  }

  function closeModal() {
    setIsOpen(false);
  }



  return (
      <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>¿Sos mayor de 18 años?</h2>
       
        
          <button onClick={closeModal}> SI </button>
          <button>NO</button>
        
      </Modal>
      </div>
  )

};

export default Mayor;