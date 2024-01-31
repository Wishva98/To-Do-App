import {TaskTO} from "../TO/TaskTO.tsx";


const API_BASE_URL='http://localhost:8080/api/v1/tasks'
export async function loadAllTask(email:string) {
    return await (await fetch(`${API_BASE_URL}?email=${email}`)).json();
}


export async function saveTask(task:TaskTO){
    return await  (await fetch(API_BASE_URL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(task)
    })).json() as TaskTO;
}

export async function updateTask(task:TaskTO){
    task.id = null;
    const response =   await fetch(`${API_BASE_URL}/${task.id}`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            description:task.description,
            status:!task.status,
            email:task.email
        })
    });

    if (!response.ok) throw new Error("Failed to update task")
}
export async function deleteTask(taskId:number){
    const response =  await fetch(`${API_BASE_URL}/${taskId}`,{method:"DELETE"});
    if (!response.ok) throw new Error("Failed to Delete")
}