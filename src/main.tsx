import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {UserProvider} from "./Context/UserContext.tsx";
import TaskProvider from "./Context/TaskContext.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <UserProvider>
          <TaskProvider>
            <App />
          </TaskProvider>
      </UserProvider>
  </React.StrictMode>,
)
