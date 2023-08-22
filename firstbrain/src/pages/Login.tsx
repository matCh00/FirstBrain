import {
  IonButton, IonButtons,
  IonContent,
  IonHeader, IonInput, IonItem, IonLabel, IonModal,
  IonPage, IonRow,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import {useForm, SubmitHandler} from "react-hook-form"
import {useState} from "react";
import {logIn, register as registerUser} from "../backend/auth";


type Inputs = {
  email: string
  password: string
}

const Login: React.FC = () => {

  const navigation = useIonRouter();
  const [isOpen, setIsOpen] = useState(false);

  const {
    handleSubmit,
    setValue,
    register
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    registerUser(data.email, data.password).then(() => {
      navigation.push("/app", "forward", "replace");
    })
  }

  const doLogin = () => {
    setIsOpen(true);
    // navigation.push("/app", "forward", "replace");
  };

  const doRegister = () => {
    navigation.push("/app", "forward", "replace");
  };

  const doPreview = () => {
    navigation.push("/app", "forward", "replace");
  };

  const closeModal = () => {
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

      <IonContent className="ion-padding ion-justify-content-center">
        <IonRow class="ion-justify-content-center">
          <IonButton class="ion-margin" expand="full" onClick={() => doLogin()}>
            Login
          </IonButton>
        </IonRow>
        <IonRow class="ion-justify-content-center">
          <IonButton class="ion-margin" expand="full" onClick={() => doRegister()}>
            Register
          </IonButton>
        </IonRow>
        <IonRow class="ion-justify-content-center">
          <IonButton class="ion-margin" expand="full" onClick={() => doPreview()}>
            Preview
          </IonButton>
        </IonRow>
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
            />

            <IonInput
              {...register("password")}
              label="password"
              labelPlacement="floating"
              fill="outline"
              class="ion-margin-top"
            />

            <div className="ion-margin-top">
              <IonButton type="submit" class="ion-float-right">
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
