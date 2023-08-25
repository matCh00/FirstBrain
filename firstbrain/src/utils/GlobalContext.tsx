import {createContext, Dispatch, useState} from "react";

export interface IGlobalState {
  userId: string | null,
  setUserId: Dispatch<string | null>,
  userName: string | null,
  setUserName: Dispatch<string | null>,
}

export const initialState = {
  userId: null,
  setUserId: () => {},
  userName: null,
  setUserName: () => {},
};


export const GlobalContext = createContext<IGlobalState>(initialState);


export const GlobalProvider = ({children}: any) => {

  const [userId, setUserId] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);

  return (
    <GlobalContext.Provider value={{userId, setUserId, userName, setUserName}}>
      {children}
    </GlobalContext.Provider>
  );
};