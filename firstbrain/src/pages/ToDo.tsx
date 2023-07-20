import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import ListToDo from "../components/ListToDo";
import { ItemToDo } from "../models/ItemToDo";


const ToDo: React.FC = () => {

  const items: Array<ItemToDo> = [{name: 'one', priority: 'ważne'}, {name: 'two', priority: 'średnie'}];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-justify-content-center">ToDo</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">ToDo</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ListToDo items={items} />

      </IonContent>
    </IonPage>
  );
};

export default ToDo;
