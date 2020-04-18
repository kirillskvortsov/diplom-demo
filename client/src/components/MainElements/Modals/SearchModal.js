import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function SearchModal(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Резерв запчасти
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Зарезервировать эту позицию для существующего заказа или создать новый?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Новый заказ</Button>
          <Button onClick={props.onHide}>Зарезервировать</Button>
        </Modal.Footer>
      </Modal>
    );
}


export default SearchModal;