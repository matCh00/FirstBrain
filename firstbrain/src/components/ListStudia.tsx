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
import { ItemStudia } from "../models/ItemStudia";
import { baseUrl } from "../App";

interface ListProps {
  items: Array<ItemStudia>;
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <IonCard className="ion-margin-top">
      <IonCardContent>

        <IonList>
          <IonRow>
            <IonCol>Nazwa</IonCol>
            <IonCol>Deadline</IonCol>
            <IonCol>Akcje</IonCol>
          </IonRow>

          {items.map((i: ItemStudia) => {
            return (
              <IonItem key={i.name + i.deadline}>
                <IonCol>{i.name}</IonCol>
                <IonCol>{i.deadline + ''}</IonCol>
                <IonCol>
                <IonButton routerLink={baseUrl + "/app/studia/details"}>Szczegóły</IonButton>
                </IonCol>
              </IonItem>
            );
          })}
        </IonList>

      </IonCardContent>
    </IonCard>
  );
};

export default List;
