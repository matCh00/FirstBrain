import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import ListZakupy from "../components/ListZakupy";
import { ItemZakupy } from "../models/ItemZakupy";


const Zakupy: React.FC = () => {

  const items: Array<ItemZakupy> = [{name: 'one', count: 2}, {name: 'two', count: 8}];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Zakupy</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Zakupy</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ListZakupy items={items} />

      </IonContent>
    </IonPage>
  );
};

export default Zakupy;
