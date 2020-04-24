import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import RushFormTable from '../Tables/RushFormTable';

function RushModal(props) {
  const data = props.show && props.data !== "" && props.data[0];
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      dialogClassName="modal-w80"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Создание заказа
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="rush-form">
          <Form.Group className="rush-form-group">
            <Form.Control 
              className="rush-form-input" 
              onChange={props.handleChange} 
              name="" 
              type="text" 
              value={data.number}
            />
            <Form.Label className="rush-form-label">Номер заказа *</Form.Label>
          </Form.Group>
          <Form.Group className="rush-form-group">
            <Form.Control 
              className="rush-form-input" 
              onChange={props.handleChange} 
              name="modalData" 
              type="text" 
              value={data.name} 
            />
            <Form.Label className="rush-form-label">ФИО *</Form.Label>
          </Form.Group>
          <Form.Group className="rush-form-group">
            <Form.Control 
              className="rush-form-input" 
              onChange={props.handleChange} 
              type="tel" 
              value={data.phone} 
            />
            <Form.Label className="rush-form-label">Телефон *</Form.Label>
          </Form.Group>
          <Form.Group className="rush-form-group">
            <Form.Control 
              className="rush-form-input" 
              onChange={props.handleChange} 
              type="email" 
              value={data.email} 
            />
            <Form.Label className="rush-form-label">e-mail</Form.Label>
          </Form.Group>
          <Form.Group className="rush-form-group">
            <Form.Control 
              className="rush-form-input" 
              onChange={props.handleChange} 
              type="date" 
              value={data.date1} 
            />
            <Form.Label className="rush-form-label">Дата заказа *</Form.Label>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelectSupplier" className="rush-form-group">
            <Form.Control 
            as="select" className="rush-form-input" 
            value={data.supplier}>
              <option>Склад</option>
              <option>Поставщик</option>
            </Form.Control>
            <Form.Label className="rush-form-label">Поставщик *</Form.Label>
          </Form.Group>
          <Form.Group className="rush-form-group">
            <Form.Control 
              className="rush-form-input" 
              onChange={props.handleChange} 
              type="date" 
              value={data.date2} 
            />
            <Form.Label className="rush-form-label">Дата доставки *</Form.Label>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelectStatus" className="rush-form-group">
            <Form.Control 
              as="select" 
              className="rush-form-input" 
              value={data.status} 
            >
              <option>Доставлено</option>
              <option>Ождиает проверки</option>
              <option>Ождиает доставки</option>
              <option>Ождиает отправки</option>
            </Form.Control>
            <Form.Label className="rush-form-label">Статус *</Form.Label>
          </Form.Group>
        </Form>
        <h3 className="rush-form-table-header">Список запчастей</h3>
        <RushFormTable data={data.parts} />
      </Modal.Body>
      <Modal.Footer className="rush-form-footer">
        <div className="rush-form-footer-left">
          <h3 className="rushTotal">Итоговая сумма</h3>
          <h3 className="rushTotalNumber">{data.totalSum ? data.totalSum : 0} руб.</h3>
        </div>
        <div className="rush-form-footer-right">
          <Button onClick={props.onHide} className="rush-form-btn rush-form-btn-supplier">Перейти в заказ поставщику</Button>
          <Button onClick={props.onHide} className="rush-form-btn rush-form-btn-save">Сохранить</Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}


export default RushModal;