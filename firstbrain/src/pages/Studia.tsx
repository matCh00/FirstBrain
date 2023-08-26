import {
  IonButton,
  IonContent, IonFab, IonFabButton,
  IonHeader, IonIcon, IonLabel,
  IonPage, IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, {useContext} from "react";
import ListStudia from "../components/ListStudia";
import {ItemStudia} from "../models/ItemStudia";
import {GlobalContext} from "../utils/GlobalContext";
import {add} from "ionicons/icons";


const Studia: React.FC = () => {

  const {userName, logOut} = useContext(GlobalContext);

  const items: Array<ItemStudia> = [{name: 'one', deadline: new Date()}, {name: 'two', deadline: new Date()}];

  const handleAdd = () => {

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

        <ListStudia items={items}/>

        <IonFab slot="fixed" vertical="bottom" horizontal="end" class="ion-margin">
          <IonFabButton onClick={handleAdd}>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>

      </IonContent>
    </IonPage>
  );
};

export default Studia;
