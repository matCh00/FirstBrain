import {
  IonButton,
  IonContent,
  IonHeader, IonLabel,
  IonPage, IonRow,
  IonTitle,
  IonToolbar, useIonRouter,
} from "@ionic/react";
import React, {useContext} from "react";
import ListZakupy from "../components/ListZakupy";
import {ItemZakupy} from "../models/ItemZakupy";
import {logOut as logOutUser} from "../backend/auth";
import {GlobalContext} from "../utils/GlobalContext";


const Zakupy: React.FC = () => {

  const navigation = useIonRouter();

  const {userName, setUserName, setUserId} = useContext(GlobalContext);

  const items: Array<ItemZakupy> = [{name: 'one', count: 2}, {name: 'two', count: 8}];

  const logOut = () => {
    logOutUser().then(() => {
      navigation.push("/", "forward", "replace");
      setUserId(null);
      setUserName(null);
    })
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

        <IonButton class="ion-margin" fill="outline" expand="block">Add</IonButton>

        <ListZakupy items={items}/>

      </IonContent>
    </IonPage>
  );
};

export default Zakupy;
