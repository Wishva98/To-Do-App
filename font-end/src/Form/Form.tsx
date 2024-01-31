import React, {useRef, useState} from "react";
import {useTaskDispatcher} from "../Context/TaskContext.tsx";
import {saveTask} from "../Service/TaskService.tsx";
import {useUser} from "../Context/UserContext.tsx";
import {TaskTO} from "../TO/TaskTO.tsx";

export function Form() {
    const [value, setValue] = useState("");
    const txtRef = useRef<HTMLInputElement>(null);
    const taskDispatcher = useTaskDispatcher();
    const user = useUser();
    function handleSubmit(e:React.FormEvent){
        e.preventDefault();
        //TODO: create a new Task
        console.log(value)
        saveTask(new TaskTO(null,value,null,user?.email!))
            .then(task=>{
                taskDispatcher({type:'add',task});
                setValue("");
                txtRef.current!.focus();
            }).catch(err => {
                alert(err);
                setValue("");
                txtRef.current!.focus();
        })

        //TODO: Add into the task list
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="d-flex gap-2 mt-4 mx-3">
                <input value={value} ref={txtRef}
                       placeholder="Eg:- finish science paper"
                       type="text" className="form-control"
                       onChange={event => setValue(event.target.value)}/>
                <button className="btn btn-warning">Add</button>
            </form>

        </>
    );
}