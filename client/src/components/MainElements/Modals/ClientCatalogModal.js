import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import ClientCatalogFormTable from '../Tables/ClientCatalogFormTable';

function ClientCatalogModal(props) {
    return (
      <Modal
        {...props}
        dialogClassName="modal-w80"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Информация о клиенте
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="rush-form">
            <Form.Group className="rush-form-group">
              <Form.Control className="rush-form-input" type="text" />
              <Form.Label className="rush-form-label">ФИО *</Form.Label>
            </Form.Group>
            <Form.Group className="rush-form-group">
              <Form.Control className="rush-form-input" type="text" />
              <Form.Label className="rush-form-label">Телефон *</Form.Label>
            </Form.Group>
            <Form.Group className="rush-form-group">
              <Form.Control className="rush-form-input" type="email" />
              <Form.Label className="rush-form-label">e-mail</Form.Label>
            </Form.Group>
            <Form.Group className="rush-form-group">
              <Form.Control className="rush-form-input" type="text" />
              <Form.Label className="rush-form-label">Адрес</Form.Label>
            </Form.Group> 
          </Form>
          <h3 className="rush-form-table-header">Список запчастей</h3>
          <ClientCatalogFormTable />
        </Modal.Body>
        <Modal.Footer className="client-form-footer">
            <Button onClick={props.onHide} className="client-form-btn">Написать</Button>
            <Button onClick={props.onHide} className="client-form-btn">Позвонить</Button>
            <Button onClick={props.onHide} className="client-form-btn">Редактировать</Button>
        </Modal.Footer>
      </Modal>
    );
}


export default ClientCatalogModal;