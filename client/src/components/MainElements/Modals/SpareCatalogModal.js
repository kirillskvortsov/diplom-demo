import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function SpareCatalogModal(props) {
    return (
        <Modal
            {...props}
            dialogClassName="modal-w80"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Создать запчасть
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form className="rush-form">
                <Form.Group className="rush-form-group">
                    <Form.Control className="rush-form-input" type="text" />
                    <Form.Label className="rush-form-label">Артикул</Form.Label>
                </Form.Group>
                <Form.Group className="rush-form-group">
                    <Form.Control className="rush-form-input" type="number" />
                    <Form.Label className="rush-form-label">Количество на складе</Form.Label>
                </Form.Group>
                <Form.Group className="rush-form-group">
                    <Form.Control className="rush-form-input" type="text" />
                    <Form.Label className="rush-form-label">VIN-номер</Form.Label>
                </Form.Group>
                <Form.Group className="rush-form-group">
                    <Form.Control className="rush-form-input" type="number" />
                    <Form.Label className="rush-form-label">Количество в резерве</Form.Label>
                </Form.Group> 
                <Form.Group className="rush-form-group">
                    <Form.Control className="rush-form-input" type="text" />
                    <Form.Label className="rush-form-label">Производитель</Form.Label>
                </Form.Group> 
                <Form.Group className="rush-form-group">
                    <Form.Control className="rush-form-input" type="text" />
                    <Form.Label className="rush-form-label">Стоимость, руб.</Form.Label>
                </Form.Group> 
                <Form.Group className="rush-form-group" controlId="exampleForm.ControlTextarea1">
                    <Form.Control className="rush-form-input" as="textarea" rows="3" />
                    <Form.Label className="rush-form-label">Описание</Form.Label>
                </Form.Group> 
            </Form>
        </Modal.Body>
        <Modal.Footer className="client-form-footer">
            <Button onClick={props.onHide} className="client-form-btn">Сохранить</Button>
        </Modal.Footer>
    </Modal>
    );
}


export default SpareCatalogModal;