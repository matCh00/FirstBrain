import {
  IonButton,
  IonContent,
  IonHeader, IonLabel,
  IonPage, IonRow,
  IonTitle,
  IonToolbar, useIonRouter,
} from "@ionic/react";
import React, {useContext} from "react";
import ListStudia from "../components/ListStudia";
import {ItemStudia} from "../models/ItemStudia";
import {logOut as logOutUser} from "../backend/auth";
import {GlobalContext} from "../utils/GlobalContext";


const Studia: React.FC = () => {

  const navigation = useIonRouter();

  const {userName, setUserName, setUserId} = useContext(GlobalContext);

  const items: Array<ItemStudia> = [{name: 'one', deadline: new Date()}, {name: 'two', deadline: new Date()}];

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
            <div><IonTitle>University</IonTitle></div>
            <div><IonLabel style={{marginTop: '1.5rem'}}>{userName}</IonLabel></div>
            <div><IonButton class="ion-margin" color="primary" onClick={logOut}>Log out</IonButton></div>
          </IonRow>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Studia</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonButton class="ion-margin" fill="outline" expand="block">Add</IonButton>

        <ListStudia items={items}/>

      </IonContent>
    </IonPage>
  );
};

export default Studia;
