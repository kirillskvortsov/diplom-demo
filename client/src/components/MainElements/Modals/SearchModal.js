import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function SearchModal(props) {
    const data = props.data[0] ||
        [{
            id: 0,
            art: '',
            cols: 0,
            vin: '',
            colr: 0,
            supp: '',
            price: 0,
            desc: '',
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
                        Создать запчасть
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="rush-form-div">
                        <Form.Group className="rush-form-group">
                            <Form.Control
                                className="rush-form-input"
                                onChange={props.handleChange}
                                name="art"
                                type="text"
                                value={data.art}
                                required
                            />
                            <Form.Label className="rush-form-label">Артикул</Form.Label>
                        </Form.Group>
                        <Form.Group className="rush-form-group">
                            <Form.Control
                                className="rush-form-input"
                                onChange={props.handleChange}
                                name="cols"
                                type="number"
                                value={data.cols}
                                required
                            />
                            <Form.Label className="rush-form-label">Количество на складе</Form.Label>
                        </Form.Group>
                        <Form.Group className="rush-form-group">
                            <Form.Control
                                className="rush-form-input"
                                onChange={props.handleChange}
                                name="vin"
                                type="text"
                                value={data.vin}
                                required
                            />
                            <Form.Label className="rush-form-label">VIN-номер</Form.Label>
                        </Form.Group>
                        <Form.Group className="rush-form-group">
                            <Form.Control
                                className="rush-form-input"
                                onChange={props.handleChange}
                                name="colr"
                                type="number"
                                value={data.colr}
                                required
                            />
                            <Form.Label className="rush-form-label">Количество в резерве</Form.Label>
                        </Form.Group>
                        <Form.Group className="rush-form-group">
                            <Form.Control
                                className="rush-form-input"
                                onChange={props.handleChange}
                                name="supp"
                                type="text"
                                value={data.supp}
                                required
                            />
                            <Form.Label className="rush-form-label">Производитель</Form.Label>
                        </Form.Group>
                        <Form.Group className="rush-form-group">
                            <Form.Control
                                className="rush-form-input"
                                onChange={props.handleChange}
                                name="price"
                                type="number"
                                value={data.price}
                                required
                            />
                            <Form.Label className="rush-form-label">Стоимость, руб.</Form.Label>
                        </Form.Group>
                        <Form.Group className="rush-form-group" controlId="exampleForm.ControlTextarea1">
                            <Form.Control
                                onChange={props.handleChange}
                                name="desc"
                                value={data.desc}
                                required
                                className="rush-form-input"
                                as="textarea" rows="3"
                            />
                            <Form.Label className="rush-form-label">Описание</Form.Label>
                        </Form.Group>
                    </div>
                </Modal.Body>
                <Modal.Footer className="client-form-footer">
                    <Button type="submit" className="client-form-btn">Сохранить</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}


export default SearchModal;