import {
  IonButton,
  IonContent, IonFab, IonFabButton,
  IonHeader, IonIcon, IonLabel,
  IonPage, IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, {useContext} from "react";
import ListToDo from "../components/ListToDo";
import {ItemToDo} from "../models/ItemToDo";
import {GlobalContext} from "../utils/GlobalContext";
import {add} from "ionicons/icons";


const ToDo: React.FC = () => {

  const {userName, logOut} = useContext(GlobalContext);

  const items: Array<ItemToDo> = [
    {name: 'one', priority: 'wysoki'},
    {name: 'two', priority: 'średni', description: 'short'},
    {
      name: 'three',
      priority: 'niski',
      description: 'long long long long long long long long long long long long long long'
    },
    {name: 'four', priority: 'średni', description: ''}
  ];

  const handleAdd = () => {

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

        <ListToDo items={items}/>

        <IonFab slot="fixed" vertical="bottom" horizontal="end" class="ion-margin">
          <IonFabButton onClick={handleAdd}>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>

      </IonContent>
    </IonPage>
  );
};

export default ToDo;
