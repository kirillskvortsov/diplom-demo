import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import TasksFormTable from '../Tables/TasksFormTable';

function TaskModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Информация о клиенте
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="tasks-form">
            <Form.Group className="tasks-form-group">
              <Form.Control className="tasks-form-input" type="text" value="Иванов Иван Иванович" />
              <Form.Label className="tasks-form-label">ФИО</Form.Label>
            </Form.Group>
            <Form.Group className="tasks-form-group">
              <Form.Control className="tasks-form-input" type="tel"  value="89642642565"/>
              <Form.Label className="tasks-form-label">Телефон</Form.Label>
            </Form.Group>
            <Form.Group className="tasks-form-group">
              <Form.Control className="tasks-form-input" type="email" value="ivanov@mail.ru" />
              <Form.Label className="tasks-form-label">e-mail</Form.Label>
            </Form.Group>
            <Form.Group className="tasks-form-group">
              <Form.Control className="tasks-form-input" type="text" value="Казань, ул.Яруллина, д.6" />
              <Form.Label className="tasks-form-label">Адрес</Form.Label>
            </Form.Group>
          </Form>
          <h3 className="tasks-form-table-header">Информация о заказах</h3>
          <TasksFormTable />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} className="tasks-form-btn">Написать</Button>
          <Button onClick={props.onHide} className="tasks-form-btn">Позвонить</Button>
          <Button onClick={props.onHide} className="tasks-form-btn">Редактировать</Button>
        </Modal.Footer>
      </Modal>
    );
}


export default TaskModal;