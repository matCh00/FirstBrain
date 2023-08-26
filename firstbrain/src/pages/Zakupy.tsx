import {
  IonButton,
  IonContent, IonFab, IonFabButton,
  IonHeader, IonIcon, IonLabel,
  IonPage, IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, {useContext} from "react";
import ListZakupy from "../components/ListZakupy";
import {ItemZakupy} from "../models/ItemZakupy";
import {GlobalContext} from "../utils/GlobalContext";
import {add} from "ionicons/icons";


const Zakupy: React.FC = () => {

  const {userName, logOut} = useContext(GlobalContext);

  const items: Array<ItemZakupy> = [{name: 'one', count: 2}, {name: 'two', count: 8}];

  const handleAdd = () => {

  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonRow class="ion-justify-content-between ion-align-items-center">
            <div><IonTitle>Shopping</IonTitle></div>
            <div><IonLabel style={{marginTop: '1.5rem'}}>{userName}</IonLabel></div>
            <div><IonButton class="ion-margin" color="primary" onClick={logOut}>Log out</IonButton></div>
          </IonRow>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Zakupy</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ListZakupy items={items}/>

        <IonFab slot="fixed" vertical="bottom" horizontal="end" class="ion-margin">
          <IonFabButton onClick={handleAdd}>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>

      </IonContent>
    </IonPage>
  );
};

export default Zakupy;
