import React, {useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import TasksFormTable from '../Tables/TasksFormTable';

function TaskModal(props) {
    const [name, setName] = useState("Иванов Иван Иванович");
    const [phone, setPhone] = useState("89642642565");
    const [email, setEmail] = useState("ivanov@mail.ru");
    const [adress, setAdress] = useState("Казань, ул.Яруллина, д.6");

    return (
      <Modal
        show={props.show}
        onHide={props.onHide}
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
          <fieldset  disabled={props.disabled}>
            <Form className="tasks-form">
              <Form.Group className="tasks-form-group">
                <Form.Control className="tasks-form-input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <Form.Label className="tasks-form-label">ФИО</Form.Label>
              </Form.Group>
              <Form.Group className="tasks-form-group">
                <Form.Control className="tasks-form-input" type="tel"  value={phone} onChange={(e) => setPhone(e.target.value)} />
                <Form.Label className="tasks-form-label">Телефон</Form.Label>
              </Form.Group>
              <Form.Group className="tasks-form-group">
                <Form.Control className="tasks-form-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Form.Label className="tasks-form-label">e-mail</Form.Label>
              </Form.Group>
              <Form.Group className="tasks-form-group">
                <Form.Control className="tasks-form-input" type="text" value={adress} onChange={(e) => setAdress(e.target.value)} />
                <Form.Label className="tasks-form-label">Адрес</Form.Label>
              </Form.Group>
            </Form>
            <h3 className="tasks-form-table-header">Информация о заказах</h3>
            <TasksFormTable/>
          </fieldset>
        </Modal.Body>
        <Modal.Footer>
          <Button className="tasks-form-btn">Написать</Button>
          <Button className="tasks-form-btn">Позвонить</Button>
          <Button onClick={props.onEditBtnClick} className="tasks-form-btn">Редактировать</Button>
          <Button onClick={props.onSaveBtnClick} className="tasks-form-btn">Сохранить</Button>
        </Modal.Footer>
      </Modal>
    );
}


export default TaskModal;