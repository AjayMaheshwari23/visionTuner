"use client"
import React, { createContext,useState, SetStateAction, Dispatch, useContext } from "react";
import { message } from "antd";

interface ContextState {
    type : string | null;
    content : string | null;
}

const initialState : ContextState =  
{
    type : "success",
    content : "Default Message"
}

interface ContextStateType {
  state: ContextState;
  setState: Dispatch<SetStateAction<ContextState>>;
  addSuccess: (messagee: string) => void;
  addError: (messagee: string) => void;
  addWarning: (messagee: string) => void;
}

const NotificationContext = createContext<ContextStateType | undefined>(undefined);

export const useNotificationContext = () : ContextStateType => {
    const context = useContext(NotificationContext);
    if(!context) {
        throw new Error("NOtification Context must be used within a NotificationProvider")
    }
    return context;
}

interface NotificationProviderProps {
    children : React.ReactNode;
}

export const NotificationProvider : React.FC<NotificationProviderProps> = ( {children}) => {
    const [state, setState] = useState<ContextState>(initialState);

     const addSuccess = (messagee: string) => {
      console.log("I called notification");
      
      message.success(messagee);
     };

     const addError = (messagee: string) => {
      message.error(messagee);
     };

     const addWarning = (messagee: string) => {
      message.warning(messagee);
     };

    const value: ContextStateType = {
      state,
      setState,
      addSuccess,
      addError,
      addWarning
    };

    return <NotificationContext.Provider value={value}> {children} </NotificationContext.Provider>

}