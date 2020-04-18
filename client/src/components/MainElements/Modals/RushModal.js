import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import RushFormTable from '../Tables/RushFormTable';

function RushModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
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
              <Form.Control className="rush-form-input" type="text" value="198273" />
              <Form.Label className="rush-form-label">Номер заказа *</Form.Label>
            </Form.Group>
            <Form.Group className="rush-form-group">
              <Form.Control className="rush-form-input" type="text" value="Иванов Иван Иванович" />
              <Form.Label className="rush-form-label">ФИО *</Form.Label>
            </Form.Group>
            <Form.Group className="rush-form-group">
              <Form.Control className="rush-form-input" type="tel"  value="89642642565"/>
              <Form.Label className="rush-form-label">Телефон *</Form.Label>
            </Form.Group>
            <Form.Group className="rush-form-group">
              <Form.Control className="rush-form-input" type="email" value="ivanov@mail.ru" />
              <Form.Label className="rush-form-label">e-mail</Form.Label>
            </Form.Group>
            <Form.Group className="rush-form-group">
              <Form.Control className="rush-form-input" type="date" value="2020-03-20" />
              <Form.Label className="rush-form-label">Дата заказа *</Form.Label>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1" className="rush-form-group">
              <Form.Control as="select" className="rush-form-input">
                <option>Склад</option>
                <option>Поставщик</option>
              </Form.Control>
              <Form.Label className="rush-form-label">Поставщик *</Form.Label>
            </Form.Group>
            <Form.Group className="rush-form-group">
              <Form.Control className="rush-form-input" type="date" value="2020-03-20" />
              <Form.Label className="rush-form-label">Дата доставки *</Form.Label>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1" className="rush-form-group">
              <Form.Control as="select" className="rush-form-input">
                <option>Доставлено</option>
                <option>Ождиает проверки</option>
                <option>Ождиает доставки</option>
                <option>Ождиает отправки</option>
              </Form.Control>
              <Form.Label className="rush-form-label">Статус *</Form.Label>
            </Form.Group>            
          </Form>
          <h3 className="rush-form-table-header">Список запчастей</h3>
          <RushFormTable />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} className="rush-form-btn">Перейти в заказ поставщику</Button>
          <Button onClick={props.onHide} className="rush-form-btn">Сохранить</Button>
        </Modal.Footer>
      </Modal>
    );
}


export default RushModal;