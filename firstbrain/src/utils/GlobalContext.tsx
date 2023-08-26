import {createContext, Dispatch, useState} from "react";
import {logOut as logOutUser} from "../backend/auth";

export interface IGlobalState {
  userId: string | null,
  setUserId: Dispatch<string | null>,
  userName: string | null,
  setUserName: Dispatch<string | null>,
  isMobile: boolean,
  setIsMobile: Dispatch<boolean>,
  logOut: () => void,
}

export const initialState = {
  userId: null,
  setUserId: () => {},
  userName: null,
  setUserName: () => {},
  isMobile: false,
  setIsMobile: () => {},
  logOut: () => {},
};


export const GlobalContext = createContext<IGlobalState>(initialState);


export const GlobalProvider = ({children}: any) => {

  const [isMobile, setIsMobile] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);

  const logOut = () => {
    logOutUser().then(() => {
      setUserId(null);
      setUserName(null);
    })
  }

  return (
    <GlobalContext.Provider value={{userId, setUserId, userName, setUserName, isMobile, setIsMobile, logOut}}>
      {children}
    </GlobalContext.Provider>
  );
};