import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function OrderPointModal(props) {
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Form className="analytics-form">
            <Form.Group className="analytics-form-group">
                <Form.Label className="analytics-form-label">Введите процент колебания спроса</Form.Label>
                <Form.Control className="analytics-form-input" type="number" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="analytics-form-footer">
            <Button onClick={props.onHide} className="analytics-form-btn">Сохранить</Button>
        </Modal.Footer>
      </Modal>
    );
}


export default OrderPointModal;