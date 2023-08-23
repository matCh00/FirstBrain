import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage, IonRow,
  IonTitle,
  IonToolbar, useIonRouter,
} from "@ionic/react";
import React from "react";
import ListZakupy from "../components/ListZakupy";
import {ItemZakupy} from "../models/ItemZakupy";
import {logOut as logOutUser} from "../backend/auth";


const Zakupy: React.FC = () => {

  const navigation = useIonRouter();

  const items: Array<ItemZakupy> = [{name: 'one', count: 2}, {name: 'two', count: 8}];

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
            <IonTitle class="ion-float-start">Zakupy</IonTitle>
            <IonButton class="ion-float-end ion-margin" color="light" onClick={logOut}>Log out</IonButton>
          </IonRow>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Zakupy</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ListZakupy items={items}/>

      </IonContent>
    </IonPage>
  );
};

export default Zakupy;
