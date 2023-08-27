import {
  IonButton, IonButtons,
  IonContent,
  IonHeader, IonInput, IonModal, IonSelect, IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {useForm} from "react-hook-form"


type Inputs = {
  name: string,
  description: string,
  priority: string,
  link: string,
}

interface ModalToDoProps {
  isOpen: boolean;
  submit: (params: Inputs) => void,
  reject: () => void
}


const ModalToDo: React.FC<ModalToDoProps> = (props: {isOpen: boolean, submit: any, reject: any}) => {

  const {handleSubmit, setValue, register} = useForm<Inputs>();

  const submitForm = (data: Inputs) => {
    props.submit({name: data.name, description: data.description, priority: data.priority, link: data.link,});
  }

  const rejectForm = () => {
    setValue("name", '');
    setValue("description", '');
    setValue("priority", '');
    setValue("link", '');
    props.reject();
  }


  return (
    <IonModal isOpen={props.isOpen} onIonModalDidDismiss={() => rejectForm()} backdropDismiss={false}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>New note</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => rejectForm()}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding ion-justify-content-center">
        {/*https://www.youtube.com/watch?v=Kdgu075v2fM*/}
        <form onSubmit={handleSubmit(submitForm)}>

          <IonInput
            {...register("name")}
            label="name"
            labelPlacement="floating"
            fill="outline"
          />

          <IonInput
            {...register("description")}
            label="description"
            labelPlacement="floating"
            fill="outline"
            class="ion-margin-top"
          />

          <IonSelect
            {...register("priority")}
            label="priority"
            labelPlacement="floating"
            fill="outline"
            class="ion-margin-top"
          >
            <IonSelectOption value="high">high</IonSelectOption>
            <IonSelectOption value="medium">medium</IonSelectOption>
            <IonSelectOption value="low">low</IonSelectOption>
          </IonSelect>

          <IonInput
            {...register("link")}
            label="link"
            labelPlacement="floating"
            fill="outline"
            className="ion-margin-top"
          />

          <div className="margin-top-2 center-container">
            <IonButton type="submit">
              Submit
            </IonButton>
          </div>

        </form>
      </IonContent>

    </IonModal>
  );
};

export default ModalToDo;
