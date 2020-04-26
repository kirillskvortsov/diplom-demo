import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import RushFormTable from '../Tables/RushFormTable';

function RushModal(props) {
  const data = props.data[0] || 
  [{
    id: 0,
    number: "",
    name: "",
    phone: "",
    email: "",
    date1: props.date,
    date2: props.date,
    supplier: "",
    status: "Ожидает отправки",
    parts: 
    [
        {   
            id: 1,
            rows: 1,
            art: "",
            desc: "",
            col: 0,
            supp: "",
            price: 0,
            selected: false
        }
    ],
    selected: false
  }];

  let total = 0;
  data.parts && data.parts.map(item => {
    total += item.col * item.price;
  })

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
              name="number" 
              type="text" 
              value={data.number}
              required
            />
            <Form.Label className="rush-form-label">Номер заказа *</Form.Label>
          </Form.Group>
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
              type="tel" 
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
            />
            <Form.Label className="rush-form-label">e-mail</Form.Label>
          </Form.Group>
          <Form.Group className="rush-form-group">
            <Form.Control 
              className="rush-form-input" 
              onChange={props.handleChange} 
              name="date1"
              type="date" 
              value={data.date1} 
              required
            />
            <Form.Label className="rush-form-label">Дата заказа *</Form.Label>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelectSupplier" className="rush-form-group">
            <Form.Control 
              as="select" 
              className="rush-form-input" 
              onChange={props.handleChange} 
              name="supplier"
              value={data.supplier}
              required
            >
              <option value="ТТС">ТТС</option>
              <option value="ЕвроАвто">ЕвроАвто</option>
            </Form.Control>
            <Form.Label className="rush-form-label">Поставщик *</Form.Label>
          </Form.Group>
          <Form.Group className="rush-form-group">
            <Form.Control 
              className="rush-form-input" 
              onChange={props.handleChange} 
              name="date2"
              type="date" 
              value={data.date2} 
              required
            />
            <Form.Label className="rush-form-label">Дата доставки *</Form.Label>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelectStatus" className="rush-form-group">
            <Form.Control 
              as="select" 
              className="rush-form-input" 
              onChange={props.handleChange} 
              name="status"
              value={data.status} 
              required
            >
              <option value="Доставлено">Доставлено</option>
              <option value="Ожидает проверки">Ожидает проверки</option>
              <option value="Ожидает доставки">Ожидает доставки</option>
              <option value="Ожидает отправки">Ожидает отправки</option>
            </Form.Control>
            <Form.Label className="rush-form-label">Статус *</Form.Label>
          </Form.Group>
        </Form>
        <h3 className="rush-form-table-header">Список запчастей</h3>
        <RushFormTable 
          data={data.parts}
          handleTableChange={props.handleTableChange}   
          handleFormDeleteButtonClick={props.handleFormDeleteButtonClick}
          handleFormRowClick={props.handleFormRowClick}      
        />
      </Modal.Body>
      <Modal.Footer className="rush-form-footer">
        <div className="rush-form-footer-left">
          <h3 className="rushTotal">Итоговая сумма</h3>
          <h3 className="rushTotalNumber">{total} руб.</h3>
        </div>
        <div className="rush-form-footer-right">
          <Button onClick={props.handleAddClick} className="rush-form-btn rush-form-btn-new">Добавить строку</Button>
          <Button onClick={props.handleFormDeleteButtonClick} className="rush-form-btn rush-form-btn-new">Удалить строку</Button>
          <Button onClick={props.handleSaveButtonClick} className="rush-form-btn rush-form-btn-save">Сохранить</Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}


export default RushModal;