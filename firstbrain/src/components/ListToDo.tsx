import "./List.css";
import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonItem,
  IonList,
  IonRow,
} from "@ionic/react";
import { ItemToDo } from "../models/ItemToDo";
import { baseUrl } from "../App";

interface ListProps {
  items: Array<ItemToDo>;
}

const ListToDo: React.FC<ListProps> = ({ items }) => {
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
              <IonItem key={i.name + i.priority}>
                <IonCol>{i.name}</IonCol>
                <IonCol>{i.priority}</IonCol>
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
