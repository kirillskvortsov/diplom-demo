import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import SupplierCatalogFormTable from '../Tables/SupplierCatalogFormTable';

function SupplierCatalogModal(props) {
  const data = props.data[0] ||
    [{
      id: 0,
      name: "",
      phone: '',
      email: '',
      address: '',
      inn: '',
      kpp: '',
      bank: '',
      selected: false,
      time: 0,
      parts: [
        {
          art: '',
          desc: '',
          price: 0,
          selected: false,
        }
      ]
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
            Информация о поставщике
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
              <Form.Label className="rush-form-label">Название</Form.Label>
            </Form.Group>
            <Form.Group className="rush-form-group">
              <Form.Control
                className="rush-form-input"
                onChange={props.handleChange}
                name="phone"
                type="tel"
                value={data.phone}
                required
              />
              <Form.Label className="rush-form-label">Телефон</Form.Label>
            </Form.Group>
            <Form.Group className="rush-form-group">
              <Form.Control
                className="rush-form-input"
                onChange={props.handleChange}
                name="inn"
                type="text"
                value={data.inn}
                required
              />
              <Form.Label className="rush-form-label">ИНН</Form.Label>
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
            <Form.Group className="rush-form-group">
              <Form.Control
                className="rush-form-input"
                onChange={props.handleChange}
                name="kpp"
                type="text"
                value={data.kpp}
                required
              />
              <Form.Label className="rush-form-label">КПП</Form.Label>
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
                name="bank"
                type="text"
                value={data.bank}
                required
              />
              <Form.Label className="rush-form-label">Банковский счёт</Form.Label>
            </Form.Group>
            <Form.Group className="rush-form-group">
              <Form.Control
                className="rush-form-input"
                onChange={props.handleChange}
                name="time"
                type="text"
                value={data.time + " дня"}
                required
                disabled
              />
              <Form.Label className="rush-form-label">Время доставки</Form.Label>
            </Form.Group>
          </div>
          <h3 className="rush-form-table-header">Список запчастей</h3>
          <SupplierCatalogFormTable
            data={data.parts}
            supplier={data.supplier}
            handleTableChange={props.handleTableChange}
            handleFormDeleteButtonClick={props.handleFormDeleteButtonClick}
            handleFormRowClick={props.handleFormRowClick}
          />
        </Modal.Body>
        <Modal.Footer className="client-form-footer">
          <Button onClick={props.handleAddClick} className="rush-form-btn rush-form-btn-new">Добавить строку</Button>
          <Button onClick={props.handleFormDeleteButtonClick} className="rush-form-btn rush-form-btn-new">Удалить строку</Button>
          <Button type="submit" className="client-form-btn">Сохранить</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}


export default SupplierCatalogModal;