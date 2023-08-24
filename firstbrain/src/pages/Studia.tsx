import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage, IonRow,
  IonTitle,
  IonToolbar, useIonRouter,
} from "@ionic/react";
import React, {useContext} from "react";
import ListStudia from "../components/ListStudia";
import {ItemStudia} from "../models/ItemStudia";
import {logOut as logOutUser} from "../backend/auth";
import {GlobalContext} from "../utils/GlobalContext";


const Studia: React.FC = () => {

  const navigation = useIonRouter();

  const {userId, setUserId} = useContext(GlobalContext);

  const items: Array<ItemStudia> = [{name: 'one', deadline: new Date()}, {name: 'two', deadline: new Date()}];

  const logOut = () => {
    logOutUser().then(() => {
      navigation.push("/", "forward", "replace");
      setUserId(null);
    })
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonRow>
            <IonTitle class="ion-float-start">University</IonTitle>
            <IonButton class="ion-float-end ion-margin" color="primary" onClick={logOut}>Log out</IonButton>
          </IonRow>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Studia</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ListStudia items={items}/>

      </IonContent>
    </IonPage>
  );
};

export default Studia;
