import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import ClientCatalogFormTable from '../Tables/ClientCatalogFormTable';

function ClientCatalogModal(props) {
  const data = props.data[0] ||
    [{
      id: 0,
      name: "",
      phone: '',
      email: '',
      address: '',
      parts:
        [
          {
            id: 1,
            number: "",
            date1: props.date,
            date2: props.date,
            status: "",
            supp: "",
            sum: 0,
            selected: false
          }
        ],
      selected: false,
    }];

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      dialogClassName="modal-w80"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form onSubmit={props.handleSaveButtonClick}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Информация о клиенте
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="rush-form-div">
            <Form.Group className="rush-form-group">
              <Form.Control
                className="rush-form-input"
                onChange={props.handleChange}
                name="name"
                type="text"
                value={data.name}
                required
              />
              <Form.Label className="rush-form-label">ФИО *</Form.Label>
            </Form.Group>
            <Form.Group className="rush-form-group">
              <Form.Control
                className="rush-form-input"
                onChange={props.handleChange}
                name="phone"
                type="number"
                value={data.phone}
                required
              />
              <Form.Label className="rush-form-label">Телефон *</Form.Label>
            </Form.Group>
            <Form.Group className="rush-form-group">
              <Form.Control
                className="rush-form-input"
                onChange={props.handleChange}
                name="email"
                type="email"
                value={data.email}
                required
              />
              <Form.Label className="rush-form-label">e-mail</Form.Label>
            </Form.Group>
            <Form.Group className="rush-form-group">
              <Form.Control
                className="rush-form-input"
                onChange={props.handleChange}
                name="address"
                type="text"
                value={data.address}
                required
              />
              <Form.Label className="rush-form-label">Адрес</Form.Label>
            </Form.Group>
          </div>
          <h3 className="rush-form-table-header">Список запчастей</h3>
          <ClientCatalogFormTable
            data={data.parts}
            supplier={data.supplier}
            handleTableChange={props.handleTableChange}
            handleFormDeleteButtonClick={props.handleFormDeleteButtonClick}
            handleFormRowClick={props.handleFormRowClick}
          />
        </Modal.Body>
        <Modal.Footer className="client-form-footer">
        <Button type="submit" className="client-form-btn">Сохранить</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}


export default ClientCatalogModal;