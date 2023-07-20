import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import ListStudia from "../components/ListStudia";
import { ItemStudia } from "../models/ItemStudia";


const Studia: React.FC = () => {

  const items: Array<ItemStudia> = [{name: 'one', deadline: new Date()}, {name: 'two', deadline: new Date()}];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Studia</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Studia</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ListStudia items={items} />

      </IonContent>
    </IonPage>
  );
};

export default Studia;
