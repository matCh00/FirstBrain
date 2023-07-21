import "./List.css";
import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
} from "@ionic/react";
import { ItemToDo } from "../models/ItemToDo";
import { baseUrl } from "../App";
import { PriorityEnum, PriorityEnum2 } from "../utils/Priority";

interface ListProps {
  items: Array<ItemToDo>;
}

const ListToDo: React.FC<ListProps> = ({ items }) => {

  const getSeverity = (key: string): string => {
    // console.log(Object.keys(PriorityEnum));
    // console.log(Object.values(PriorityEnum));
    return PriorityEnum2[key.toUpperCase() as keyof typeof PriorityEnum2];
  }

  return (
    <IonCard className="ion-margin-top">
      <IonCardContent>

        <IonList>
          <IonRow>
            <IonCol>Nazwa</IonCol>
            <IonCol>Priorytet</IonCol>
            <IonCol>Akcje</IonCol>
          </IonRow>

          {items.map((i: ItemToDo) => {
            return (
              <IonItem key={i.name + i.priority} className="item">
                <IonCol>{i.name}</IonCol>
                <IonCol><IonLabel color={getSeverity(i.priority)}>{i.priority}</IonLabel></IonCol>
                <IonCol>
                  <IonButton routerLink={baseUrl + "/app/todo/details"}>Szczegóły</IonButton>
                </IonCol>
              </IonItem>
            );
          })}
        </IonList>
        
      </IonCardContent>
    </IonCard>
  );
};

export default ListToDo;
