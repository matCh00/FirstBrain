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
import {ItemZakupy} from "../models/ItemZakupy";
import {baseUrl} from "../App";


interface ListProps {
  items: Array<ItemZakupy>;
}


const List: React.FC<ListProps> = ({items}) => {


  return (
    <IonCard className="ion-margin-top">
      <IonCardContent>

        <IonList>
          <IonRow>
            <IonCol>Name</IonCol>
            <IonCol>Amount</IonCol>
            <IonCol>Actions</IonCol>
          </IonRow>

          {items.map((i: ItemZakupy) => {
            return (
              <IonItem key={i.name + i.count} className="item">
                <IonCol>{i.name}</IonCol>
                <IonCol>{i.count}</IonCol>
                <IonCol>
                  <IonButton routerLink={baseUrl + "/app/zakupy/details"}>Details</IonButton>
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
