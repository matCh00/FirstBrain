import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter, useIonToast,
} from "@ionic/react";
import {useContext, useState} from "react";
import {logIn as logInUser, register as registerUser} from "../backend/auth";
import {addDefaultCollections} from "../backend/api";
import {GlobalContext} from "../utils/GlobalContext";
import LoginModal from "../components/LoginModal";


const Login: React.FC = () => {

  const navigation = useIonRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState(-1);
  const [present] = useIonToast();

  const presentToast = () => {
    present({
      message: 'Incorrect credentials!',
      duration: 2000,
      position: 'top',
      color: 'danger',
      cssClass: 'margin-top-2'
    });
  };

  const {setUserName, setUserId} = useContext(GlobalContext);

  const onSubmit = (params: {email: string, password: string}) => {
    if (mode === 1)
      logInUser(params.email, params.password).then((res) => {
        if (res) {
          setIsOpen(false);
          setUserName(res.email);
          setUserId(res.uid);
          navigation.push("/app", "forward", "replace");
        } else
          presentToast();
      })
    else if (mode === 2)
      registerUser(params.email, params.password).then((res) => {
        if (res) {
          setIsOpen(false);
          setUserName(res.email);
          setUserId(res.uid);
          addDefaultCollections(res.uid);
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

  const doPreview = () => {
    setMode(3);
    setUserId('test');
    setUserName('test');
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

      <LoginModal
        isOpen={isOpen}
        submit={onSubmit}
        reject={closeModal}
      ></LoginModal>

    </IonPage>
  );
};

export default Login;
