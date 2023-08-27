import {
  IonButton,
  IonContent, IonFab, IonFabButton,
  IonHeader, IonIcon, IonLabel,
  IonPage, IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, {useContext, useState} from "react";
import ListToDo from "../components/ListToDo";
import {GlobalContext} from "../utils/GlobalContext";
import {add} from "ionicons/icons";
import ModalToDo from "../components/ModalToDo";
import {addAllToDo} from "../backend/api";
import {ItemToDo} from "../models/ItemToDo";


const ToDo: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  const {userId, userName, logOut, todoList} = useContext(GlobalContext);

  const handleAdd = () => {
    setIsOpen(true);
  }

  const handleSubmit = (params: ItemToDo) => {
    addAllToDo(userId + '', [params]).then(()  => {
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

        <ListToDo items={todoList}/>

        <IonFab slot="fixed" vertical="bottom" horizontal="end" class="ion-margin">
          <IonFabButton onClick={handleAdd}>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>

        <ModalToDo
          isOpen={isOpen}
          submit={handleSubmit}
          reject={() => closeModal()}
        ></ModalToDo>

      </IonContent>
    </IonPage>
  );
};

export default ToDo;
