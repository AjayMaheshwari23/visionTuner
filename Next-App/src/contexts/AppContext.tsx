"use client";
import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

import { message } from "antd";
import User from "../app/models/user";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
const jose = require("jose");

interface AppState {
  theme: string;
  user: User | undefined;
  type: string | null;
  content: string | null;
}

interface AppContextType {
  state: AppState;
  setState: Dispatch<SetStateAction<AppState>>;
  addSuccess: (message: string) => void;
  addError: (message: string) => void;
  addWarning: (message: string) => void;
}

const initialAppState: AppState = {
  theme: "light",
  user: undefined,
  type: "success",
  content: "Default Message",
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, setState] = useState<AppState>(initialAppState);

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

  const router = useRouter();
  useEffect(() => {
    const func = async () => {
      console.log("I am running to fix things!");

      const cookies = document.cookie.split("; ");
      const tokenCookie = cookies.find((cookie) =>
        cookie.startsWith("jwtToken=")
      );

      if (!tokenCookie) {
        router.push("/");
        return;
      }

      const token = tokenCookie?.substring("jwtToken=".length);
      const secret = new TextEncoder().encode("visionTuner");
      const decoded = await jose.jwtVerify(token, secret);
      const userId = decoded.payload.user.id;
      const user = await useAuth(userId);
      setState({
        ...state,
        user: user,
      });

      
    };

    func();

  }, []);

  const value: AppContextType = {
    state,
    setState,
    addSuccess,
    addError,
    addWarning,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
