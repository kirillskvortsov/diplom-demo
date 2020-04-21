import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import IncomingFormTable from '../Tables/IncomingFormTable';

function IncomingModal(props) {
    return (
      <Modal
        {...props}
        dialogClassName="modal-w80"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Создание накладной
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="rush-form">
            <Form.Group className="rush-form-group">
              <Form.Control className="rush-form-input" type="text" />
              <Form.Label className="rush-form-label">Номер накладной *</Form.Label>
            </Form.Group>
            <Form.Group className="rush-form-group">
              <Form.Control className="rush-form-input" type="date" />
              <Form.Label className="rush-form-label">Дата *</Form.Label>
            </Form.Group>
            <Form.Group className="rush-form-group">
              <Form.Control className="rush-form-input" type="text" />
              <Form.Label className="rush-form-label">Поставщик *</Form.Label>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelectStatus" className="rush-form-group">
              <Form.Control as="select" className="rush-form-input">
                <option>Отправлено</option>
                <option>Ожидает проверки</option>
              </Form.Control>
              <Form.Label className="rush-form-label">Статус *</Form.Label>
            </Form.Group>            
          </Form>
          <h3 className="rush-form-table-header">Список запчастей</h3>
          <IncomingFormTable />
        </Modal.Body>
        <Modal.Footer className="rush-form-footer">
          <div className="rush-form-footer-left">
            <h3 className="rushTotal">Итоговая сумма</h3>
            <h3 className="rushTotalNumber">0 руб.</h3>
          </div>
          <div className="rush-form-footer-right">
            <Button onClick={props.onHide} className="rush-form-btn rush-form-btn-supplier">Перейти в заказ поставщику</Button>
            <Button onClick={props.onHide} className="rush-form-btn rush-form-btn-save">Сохранить</Button>
          </div>
        </Modal.Footer>
      </Modal>
    );
}


export default IncomingModal;