import './App.css';
import {onAuthStateChanged} from "firebase/auth";
import {useEffect, useRef, useState} from "react";
import {auth} from "./firebase.tsx";
import {useUser, useUserDispatcher} from "./Context/UserContext.tsx";
import {Signin} from "./Signin/Signin.tsx";
import {Loader} from "./Loader/Loader.tsx";
import {Header} from "./Header/Header.tsx";
import {Form} from "./Form/Form.tsx";
import {useTaskDispatcher, useTaskList} from "./Context/TaskContext.tsx";
import {loadAllTask} from "./Service/TaskService.tsx";
import {Task} from "./Task/Task.tsx";

function App() {
    const userDispatcher = useUserDispatcher();
    const user = useUser();
    const [loader, setLoader] = useState(true);
    const taskList = useTaskList();
    const taskDispatcher = useTaskDispatcher();
    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            setLoader(false);
            if (user){
                userDispatcher({type:'sign-in',user});
                loadAllTask(user.email!).then(taskList =>{
                    taskDispatcher({type:'set-List',taskList})
                });
            }else {
                userDispatcher({type:"sign-out"});
                taskDispatcher({type:"set-List",taskList:[]})
            }
        } )
    },[]);


  return (
    <>
        {loader ? <Loader/>:
            user ?
                (<>
                    <Header/>
                    <Form/>
                    {taskList.map((task) => (
                        <Task key={task.id} {...task}/>
                    ))}

                </>)
                : <Signin/>
        }

    </>
  )
}

export default App
