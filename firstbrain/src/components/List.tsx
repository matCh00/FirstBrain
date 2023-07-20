import "./List.css";
import React from "react";
import { IonCard, IonCardContent, IonItem, IonLabel, IonList } from '@ionic/react';
import { Item } from "../models/Item";


interface ListProps {
  name: string,
  items: Array<Item>;
}

const List: React.FC<ListProps> = ({ name, items }) => {
  return (
    <IonCard>

      {/* <IonCardHeader>
        <IonCardTitle>{name}</IonCardTitle>
      </IonCardHeader> */}

      <IonCardContent>
        <IonList>
          {
            items.map((i: Item) => {
              return (
                <IonItem>
                  <IonLabel>{i.name}</IonLabel>
                </IonItem>
              )
            })
          }
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};

export default List;
