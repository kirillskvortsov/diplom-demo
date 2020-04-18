import React from 'react';
import { Card, Form } from 'react-bootstrap';

function Task(props) {
    return(
        <React.Fragment>
            <h3 className="sub-header task-group-name">{props.header}</h3>
            {props.tasks.map((task) =>
                <Card className="task-card">
                    <Card.Body className="card-text">
                        <a className="card-anchor" href="#" onClick={props.header === "Срочные заказы:" && props.onClickNotification}>
                            {task}
                        </a>
                    </Card.Body>
                    <Form.Check type="checkbox" className="card-check" />
                </Card>
            )} 
        </React.Fragment>
    );
}

export default Task;