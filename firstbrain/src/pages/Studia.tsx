import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage, IonRow,
  IonTitle,
  IonToolbar, useIonRouter,
} from "@ionic/react";
import React from "react";
import ListStudia from "../components/ListStudia";
import {ItemStudia} from "../models/ItemStudia";
import {logOut as logOutUser} from "../backend/auth";


const Studia: React.FC = () => {

  const navigation = useIonRouter();

  const items: Array<ItemStudia> = [{name: 'one', deadline: new Date()}, {name: 'two', deadline: new Date()}];

  const logOut = () => {
    logOutUser().then(() => {
      navigation.push("/", "forward", "replace");
    })
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonRow>
            <IonTitle class="ion-float-start">Studia</IonTitle>
            <IonButton class="ion-float-end ion-margin" color="light" onClick={logOut}>Log out</IonButton>
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
