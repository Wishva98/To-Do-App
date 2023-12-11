import React, {createContext, Dispatch, ReactNode, useContext, useReducer} from "react";
import {User}  from 'firebase/auth';

const UserContext = createContext<User|null>(null);
const UserDispatcherContext = createContext<React.Dispatch<any>>(()=>{})

type TAction = {
    type:"sign-in"|"sing-out",
    [property:string]:any
}

function userReducer(user:User,action:TAction){
    switch (action.type){
        case 'sign-in':
            return action.user;
        default:
            return null;
    }
}
export function UserProvider({children}:{children:ReactNode}) {
    const [user, userDispatcher] = useReducer(userReducer,null);

    return (
        <UserContext.Provider value={user}>
            <UserDispatcherContext.Provider value={userDispatcher}>
                {children}
            </UserDispatcherContext.Provider>
        </UserContext.Provider>
    );
}

export function useUser(){
    return useContext(UserContext);
}

export function useUserDispatcher(){
    return useContext(UserDispatcherContext);
}