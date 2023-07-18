import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";


const Login: React.FC = () => {
  const navigation = useIonRouter();

  const doLogin = () => {
    // make your auth stuff
    // navigation.push('/app', 'root', 'replace');
    navigation.push("/app", "forward", "replace"); // forward annimation
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand="full" onClick={() => doLogin()}>
          Login
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
