import "./List.css";
import React, {useContext} from "react";
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
import {ItemToDo} from "../models/ItemToDo";
import {baseUrl} from "../App";
import {GlobalContext} from "../utils/GlobalContext";
import {Helpers} from "../utils/Helpers";


interface ListProps {
  items: Array<ItemToDo>;
}


const ListToDo: React.FC<ListProps> = ({items}) => {

  const {isMobile} = useContext(GlobalContext);


  return (
    <IonCard className="ion-margin-top">
      <IonCardContent>

        <IonList>
          <IonRow>
            <IonCol>Name</IonCol>
            <IonCol>Priority</IonCol>
            <IonCol>Description</IonCol>
            <IonCol>Actions</IonCol>
          </IonRow>

          {items.map((i: ItemToDo) => {
            return (
              <IonItem key={i.name + i.priority} className="item">
                <IonCol>{i.name}</IonCol>
                <IonCol><IonLabel color={Helpers.getSeverity(i.priority)}>{i.priority}</IonLabel></IonCol>
                <IonCol>{Helpers.shortenString(i?.description ? i.description : '', isMobile ? 5 : 30)}</IonCol>
                <IonCol>
                  <IonButton routerLink={baseUrl + "/app/todo/details"}>Details</IonButton>
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
