import {
  IonButton,
  IonContent,
  IonHeader, IonLoading,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter, useIonToast,
} from "@ionic/react";
import {useContext, useState} from "react";
import {logIn as logInUser, register as registerUser} from "../backend/auth";
import {addDefaultCollections, getAllStudia, getAllToDo, getAllZakupy} from "../backend/api";
import {GlobalContext} from "../utils/GlobalContext";
import ModalLogin from "../components/ModalLogin";


const Login: React.FC = () => {

  const navigation = useIonRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [mode, setMode] = useState(-1);
  const [present] = useIonToast();

  const presentToast = () => {
    setShowLoading(false);
    present({
      message: 'Incorrect credentials!',
      duration: 2000,
      position: 'top',
      color: 'danger',
      cssClass: 'margin-top-2'
    });
  };

  const {userId, setUserName, setUserId, setTodoList, setZakupyList, setStudiaList} = useContext(GlobalContext);

  const onSubmit = (params: {email: string, password: string}) => {
    setShowLoading(true);
    if (mode === 1)
      logInUser(params.email, params.password).then(async (res) => {
        if (res) {
          setIsOpen(false);
          setUserName(res.email);
          setUserId(res.uid);

          const todoList = await getAllToDo(userId + '');
          setTodoList(todoList);
          const zakupyList = await getAllZakupy(userId + '');
          setZakupyList(zakupyList);
          const studiaList = await getAllStudia(userId + '');
          setStudiaList(studiaList);

          setShowLoading(false);
          navigation.push("/app", "forward", "replace");
        } else
          presentToast();
      })
    else if (mode === 2)
      registerUser(params.email, params.password).then(async (res) => {
        if (res) {
          setIsOpen(false);
          setUserName(res.email);
          setUserId(res.uid);

          await addDefaultCollections(res.uid);

          setShowLoading(false);
          navigation.push("/app", "forward", "replace");
        } else
          presentToast();
      })
    else
      return
  }

  const doLogin = () => {
    setMode(1);
    setIsOpen(true);
  };

  const doRegister = () => {
    setMode(2);
    setIsOpen(true);
  };

  const doPreview = async () => {
    setMode(3);
    setShowLoading(true);
    setUserId('test');
    setUserName('test');

    const todoList = await getAllToDo('test');
    setTodoList(todoList);
    const zakupyList = await getAllZakupy('test');
    setZakupyList(zakupyList);
    const studiaList = await getAllStudia('test');
    setStudiaList(studiaList);

    setShowLoading(false);
    navigation.push("/app", "forward", "replace");
  };

  const closeModal = () => {
    setMode(-1);
    setIsOpen(false);
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="login-container">
          <IonButton class="login-button" expand="full" onClick={() => doLogin()}>
            Login
          </IonButton>
          <IonButton class="login-button" expand="full" onClick={() => doRegister()}>
            Register
          </IonButton>
          <IonButton class="login-button" expand="full" onClick={() => doPreview()}>
            Preview
          </IonButton>
        </div>
      </IonContent>

      <IonLoading
        isOpen={showLoading}
        message={'Please wait...'}
      />

      <ModalLogin
        isOpen={isOpen}
        submit={onSubmit}
        reject={() => closeModal()}
      ></ModalLogin>

    </IonPage>
  );
};

export default Login;
