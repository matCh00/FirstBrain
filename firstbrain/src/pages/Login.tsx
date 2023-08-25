import {
  IonButton, IonButtons,
  IonContent,
  IonHeader, IonInput, IonModal,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter, useIonToast,
} from "@ionic/react";
import {useForm, SubmitHandler} from "react-hook-form"
import {useContext, useState} from "react";
import {logIn as logInUser, register as registerUser} from "../backend/auth";
import {addDefaultCollections} from "../backend/api";
import {GlobalContext} from "../utils/GlobalContext";


type Inputs = {
  email: string
  password: string
}

const Login: React.FC = () => {

  const navigation = useIonRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState(-1);
  const [present] = useIonToast();

  const {handleSubmit, setValue, register} = useForm<Inputs>();

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

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    if (mode === 1)
      logInUser(data.email, data.password).then((res) => {
        if (res) {
          setIsOpen(false);
          setUserName(res.email);
          setUserId(res.uid);
          navigation.push("/app", "forward", "replace");
        } else
          presentToast();
      })
    else if (mode === 2)
      registerUser(data.email, data.password).then((res) => {
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
    setValue("email", '');
    setValue("password", '');
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

      <IonModal isOpen={isOpen} onIonModalDidDismiss={() => closeModal()}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Credentials</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => closeModal()}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding ion-justify-content-center">
          {/*https://www.youtube.com/watch?v=Kdgu075v2fM*/}
          <form onSubmit={handleSubmit(onSubmit)}>

            <IonInput
              {...register("email")}
              label="email"
              labelPlacement="floating"
              fill="outline"
              class="margin-top-2"
            />

            <IonInput
              {...register("password")}
              label="password"
              labelPlacement="floating"
              fill="outline"
              className="margin-top-2"
            />

            <div className="margin-top-2 center-container">
              <IonButton type="submit">
                Submit
              </IonButton>
            </div>

          </form>
        </IonContent>

      </IonModal>
    </IonPage>
  );
};

export default Login;
