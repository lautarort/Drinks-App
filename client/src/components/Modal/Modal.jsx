import React, { useState } from 'react';
import Modal from 'react-modal';
import style from './Modal.module.css';


const Mayor = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(true);


  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '';
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <div  >
      <Modal className={style.modal}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className={style.modal}
      >

        <div className={style.ctnText}>
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>¿Sos mayor de 18 años?</h2>

          <div className={style.ctnBtns}>
            <button className={style.btn} onClick={closeModal}> SI </button>
            <button className={style.btn}>NO</button>
          </div>
        </div>


      </Modal>
    </div>
  )

};

export default Mayor;