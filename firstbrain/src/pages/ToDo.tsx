import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { baseUrl } from "../App";


const ToDo: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ToDo</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">ToDo</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonButton routerLink={baseUrl + "/app/todo/details"} expand="full">Details</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default ToDo;
