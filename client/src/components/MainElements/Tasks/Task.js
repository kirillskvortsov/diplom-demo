import React from 'react';
import { Card, Form } from 'react-bootstrap';

function Task(props) {
    return(
        <React.Fragment>
            <h3 className="sub-header task-group-name">{props.header}</h3>
            {props.tasks.map((task) =>
                <Card className="task-card" key={task.id}>
                    <Card.Body className="card-text">
                        <span className="card-anchor" onClick={props.onClickNotification}>
                            {task.text}
                        </span>
                    </Card.Body>
                    <Form.Check type="checkbox" className="card-check" />
                </Card>
            )} 
        </React.Fragment>
    );
}

export default Task;