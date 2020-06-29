import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function OrderPointModal(props) {
  const data = props.data[0] ||
    [{
      id: 0,
      period: 0,
      days: 0,
      stock: 0,
      percent: 0,
    }];

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
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
            <Form.Control
              className="analytics-form-input"
              type="number"
              onChange={props.handleChange}
              name="percent"
              value={data.percent}
              required
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="analytics-form-footer">
        <Button onClick={props.handleSaveButtonClick} className="analytics-form-btn">Сохранить</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default OrderPointModal;