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


const Studia: React.FC = () => {
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
        
        <IonButton routerLink={baseUrl + "/app/studia/details"} expand="full">Details</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Studia;
