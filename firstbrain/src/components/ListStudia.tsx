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
import {ItemStudia} from "../models/ItemStudia";
import {baseUrl} from "../App";
import {Helpers} from "../utils/Helpers";


interface ListProps {
  items: Array<ItemStudia>;
}


const List: React.FC<ListProps> = ({items}) => {


  return (
    <IonCard className="ion-margin-top">
      <IonCardContent>

        <IonList>
          <IonRow>
            <IonCol>Name</IonCol>
            <IonCol>Deadline</IonCol>
            <IonCol>Remains</IonCol>
            <IonCol>Actions</IonCol>
          </IonRow>

          {items.map((i: ItemStudia) => {
            return (
              <IonItem key={i.name + i.deadline} className="item">
                <IonCol>{i.name}</IonCol>
                <IonCol>{Helpers.getDeadline(i.deadline)}</IonCol>
                <IonCol>{Helpers.getRemains(i.deadline)}</IonCol>
                <IonCol>
                  <IonButton routerLink={baseUrl + "/app/studia/details"}>Details</IonButton>
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
