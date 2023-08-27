import {
  IonButton,
  IonContent, IonFab, IonFabButton,
  IonHeader, IonIcon, IonLabel,
  IonPage, IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, {useContext, useState} from "react";
import ListStudia from "../components/ListStudia";
import {GlobalContext} from "../utils/GlobalContext";
import {add} from "ionicons/icons";
import {addAllStudia} from "../backend/api";
import {ItemStudia} from "../models/ItemStudia";
import ModalStudia from "../components/ModalStudia";


const Studia: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  const {userId, userName, logOut, studiaList} = useContext(GlobalContext);

  const handleAdd = () => {
    setIsOpen(true)
  }

  const handleSubmit = (params: ItemStudia) => {
    addAllStudia(userId + '', [params]).then(()  => {
      setIsOpen(false);
    })
  }

  const closeModal = () => {
    setIsOpen(false);
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

        <ListStudia items={studiaList}/>

        <IonFab slot="fixed" vertical="bottom" horizontal="end" class="ion-margin">
          <IonFabButton onClick={handleAdd}>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>

        <ModalStudia
          isOpen={isOpen}
          submit={handleSubmit}
          reject={() => closeModal()}
        ></ModalStudia>

      </IonContent>
    </IonPage>
  );
};

export default Studia;
