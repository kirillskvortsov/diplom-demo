import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import PlanFormTable from '../Tables/PlanFormTable';

function PlanModal(props) {
  const data = props.data[0] ||
    [{
      id: 0,
      number: "",
      date1: props.date,
      date2: props.date,
      status: "Не доставлено",
      parts:
        [
          {
            id: 1,
            art: "",
            desc: "",
            col: 1,
            supp: "ТТС",
            date: props.date,
            price: 0,
            selected: false
          }
        ],
      selected: false,
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
      <Form onSubmit={props.handleSaveButtonClick}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Создание заказа
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="rush-form-div">
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
                name="date1"
                type="date"
                value={data.date1}
                required
              />
              <Form.Label className="rush-form-label">Дата заказа *</Form.Label>
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
                <option value="Не доставлено">Не доставлено</option>
              </Form.Control>
              <Form.Label className="rush-form-label">Статус *</Form.Label>
            </Form.Group>
          </div>
          <h3 className="rush-form-table-header">Список запчастей</h3>
          <PlanFormTable
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
            <Button type="submit" className="rush-form-btn rush-form-btn-save">Сохранить</Button>
          </div>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}


export default PlanModal;