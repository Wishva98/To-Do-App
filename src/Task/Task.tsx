import './Task.css';
import React, {useId, useState} from "react";
import {TaskTO} from "../TO/TaskTO.tsx";
import {deleteTask, updateTask} from "../Service/TaskService.tsx";
import {useTaskDispatcher} from "../Context/TaskContext.tsx";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
export function Task(task:TaskTO) {
    const id = useId();
    const [checked, setChecked] = useState(task.status)
    const taskDispatcher = useTaskDispatcher();
    function handleCheck(e:React.ChangeEvent<HTMLInputElement>){
        updateTask(task).then(value => {
            taskDispatcher({
                type:'update',
                task
            })
            setChecked(!checked);
        }).catch(err=> {
            alert(err)
        })
    }

    function handleDelete(){
        deleteTask(task.id!).then(value => {
            taskDispatcher({
                type:'delete',
                id:task.id
            })
        }).catch(error => alert(error))
    }
    return (
        <div className="Task d-flex align-items-center mt-2 justify-content-between border-bottom">
            <div>
                <input checked={checked ?? false} onChange={handleCheck}  id={id} className="form-check-input mx-3" type="checkbox"/>
                <label className="form-check-label" htmlFor={id}>{task.description}</label>
            </div>
            <div className="d-flex gap-3 mx-3">
                <button className="btn btn-outline-info"><i className="bi bi-pencil-square"></i></button>
                <button onClick={handleDelete} className="btn btn-outline-danger"><i className="bi bi-trash-fill"></i></button>
            </div>
        </div>
    );
}