import React, { useState } from 'react';
import Task from '../Tasks/Task';
import info from '../../info/tasksInfo';
import TaskModal from '../Modals/ClientNotificationModal';

function TasksPage() {
    const [editTable, setEditTable] = useState(true);
    const [modalShowNotification, setModalShowNotification] = useState(false);

    return(
        <main className="main main-tasks">
            <div className="search-headers">
                <h1 className="page-header">Задачи</h1>
                <h2 className="sub-header height-48 next-plan">До следующего планового заказа: 35 дней</h2>
            </div>

            {info.map((task) => 
                <Task 
                    key={task.id}
                    header={task.header} 
                    tasks={task.tasks} 
                    onClickNotification={() => setModalShowNotification(true)}
                />
            )}

            <TaskModal 
                show={modalShowNotification}
                onHide={() => {setModalShowNotification(false); setEditTable(true)}}
                disabled={editTable}
                onEditBtnClick={() => setEditTable(false)}
                onSaveBtnClick={() => setEditTable(true)}
            />
        </main>
    );
}

export default TasksPage;