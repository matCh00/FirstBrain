import {
  IonButton,
  IonContent, IonFab, IonFabButton,
  IonHeader, IonIcon, IonLabel,
  IonPage, IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, {useContext, useState} from "react";
import ListZakupy from "../components/ListZakupy";
import {GlobalContext} from "../utils/GlobalContext";
import {add} from "ionicons/icons";
import ModalZakupy from "../components/ModalZakupy";
import {addAllZakupy} from "../backend/api";
import {ItemZakupy} from "../models/ItemZakupy";


const Zakupy: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  const {userId, userName, logOut, zakupyList} = useContext(GlobalContext);

  const handleAdd = () => {
    setIsOpen(true)
  }

  const handleSubmit = (params: ItemZakupy) => {
    addAllZakupy(userId + '', [params]).then(()  => {
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

        <ListZakupy items={zakupyList}/>

        <IonFab slot="fixed" vertical="bottom" horizontal="end" class="ion-margin">
          <IonFabButton onClick={handleAdd}>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>

        <ModalZakupy
          isOpen={isOpen}
          submit={handleSubmit}
          reject={() => closeModal()}
        ></ModalZakupy>

      </IonContent>
    </IonPage>
  );
};

export default Zakupy;
