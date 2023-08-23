import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage, IonRow,
  IonTitle,
  IonToolbar, useIonRouter,
} from "@ionic/react";
import React from "react";
import ListToDo from "../components/ListToDo";
import {ItemToDo} from "../models/ItemToDo";
import {logOut as logOutUser} from "../backend/auth";


const ToDo: React.FC = () => {

  const navigation = useIonRouter();

  const items: Array<ItemToDo> = [
    {name: 'one', priority: 'wysoki'},
    {name: 'two', priority: 'średni'},
    {name: 'three', priority: 'niski'},
    {name: 'four', priority: 'średni'}
  ];

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
            <IonTitle class="ion-float-start">ToDo</IonTitle>
            <IonButton class="ion-float-end ion-margin" color="light" onClick={logOut}>Log out</IonButton>
          </IonRow>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">ToDo</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ListToDo items={items}/>

      </IonContent>
    </IonPage>
  );
};

export default ToDo;