import {
  IonButton,
  IonContent,
  IonHeader, IonLabel,
  IonPage, IonRow,
  IonTitle,
  IonToolbar, useIonRouter,
} from "@ionic/react";
import React, {useContext} from "react";
import ListToDo from "../components/ListToDo";
import {ItemToDo} from "../models/ItemToDo";
import {logOut as logOutUser} from "../backend/auth";
import {GlobalContext} from "../utils/GlobalContext";


const ToDo: React.FC = () => {

  const navigation = useIonRouter();

  const {userName, setUserName, setUserId} = useContext(GlobalContext);

  const items: Array<ItemToDo> = [
    {name: 'one', priority: 'wysoki'},
    {name: 'two', priority: 'średni'},
    {name: 'three', priority: 'niski'},
    {name: 'four', priority: 'średni'}
  ];

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
            <div><IonTitle>ToDo</IonTitle></div>
            <div><IonLabel style={{marginTop: '1.5rem'}}>{userName}</IonLabel></div>
            <div><IonButton class="ion-margin" color="primary" onClick={logOut}>Log out</IonButton></div>
          </IonRow>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">ToDo</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonButton class="ion-margin" fill="outline" expand="block">Add</IonButton>

        <ListToDo items={items}/>

      </IonContent>
    </IonPage>
  );
};

export default ToDo;
