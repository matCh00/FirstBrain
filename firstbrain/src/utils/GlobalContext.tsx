import {createContext, Dispatch, useState} from "react";
import {logOut as logOutUser} from "../backend/auth";
import {ItemToDo} from "../models/ItemToDo";
import {ItemZakupy} from "../models/ItemZakupy";
import {ItemStudia} from "../models/ItemStudia";

export interface IGlobalState {
  userId: string | null,
  setUserId: Dispatch<string | null>,
  userName: string | null,
  setUserName: Dispatch<string | null>,
  isMobile: boolean,
  setIsMobile: Dispatch<boolean>,
  logOut: () => void,
  todoList: Array<ItemToDo>,
  setTodoList: Dispatch<Array<ItemToDo>>,
  zakupyList: Array<ItemZakupy>,
  setZakupyList: Dispatch<Array<ItemZakupy>>,
  studiaList: Array<ItemStudia>,
  setStudiaList: Dispatch<Array<ItemStudia>>,
}

export const initialState = {
  userId: null,
  setUserId: () => {},
  userName: null,
  setUserName: () => {},
  isMobile: false,
  setIsMobile: () => {},
  logOut: () => {},
  todoList: [],
  setTodoList: () => {},
  zakupyList: [],
  setZakupyList: () => {},
  studiaList: [],
  setStudiaList: () => {},
};


export const GlobalContext = createContext<IGlobalState>(initialState);


export const GlobalProvider = ({children}: any) => {

  const [isMobile, setIsMobile] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [todoList, setTodoList] = useState<Array<ItemToDo>>([]);
  const [zakupyList, setZakupyList] = useState<Array<ItemZakupy>>([]);
  const [studiaList, setStudiaList] = useState<Array<ItemStudia>>([]);

  const logOut = () => {
    logOutUser().then(() => {
      setUserId(null);
      setUserName(null);
    })
  }

  return (
    <GlobalContext.Provider value={{userId, setUserId, userName, setUserName, isMobile, setIsMobile, logOut, todoList, setTodoList, zakupyList, setZakupyList, studiaList, setStudiaList}}>
      {children}
    </GlobalContext.Provider>
  );
};