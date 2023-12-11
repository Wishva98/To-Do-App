import React, {createContext, ReactNode, useContext, useReducer} from "react";
import {TaskTO} from "../TO/TaskTO.tsx";

type Action = {
    type:"add"|"delete"| "update" |"set-List",
    [property:string]:any
}
const TaskContext = createContext<TaskTO[]>([]);
const TaskDispatcherContext = createContext<React.Dispatch<Action>>(()=>{});

function taskReducer(taskList:TaskTO[],action:Action){
    if (action.type === 'add') {
        return [...taskList, action.task];
    }else if (action.type==='delete') {
        return taskList.filter(t=>t.id !== action.task.id);
    }else if(action.type ==="update"){
        const task = taskList.find(t=> t.id === action.id);
        task.status = !task.status;
        return taskList;
    }else {
        return action.taskList
    }
}

export default function TaskProvider({children}:{children:ReactNode}){
    const [taskList, taskDispatcher] = useReducer(taskReducer,[]);

    return(
        <TaskContext.Provider value={taskList}>
            <TaskDispatcherContext.Provider value={taskDispatcher}>
                {children}
            </TaskDispatcherContext.Provider>
        </TaskContext.Provider>
    );
}

export function useTaskList(){
    return useContext(TaskContext);
}

export function useTaskDispatcher(){
    return useContext(TaskDispatcherContext);
}