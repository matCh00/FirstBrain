import {
  IonButton, IonButtons,
  IonContent,
  IonHeader, IonInput, IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {useForm} from "react-hook-form"


type Inputs = {
  name: string,
  description: string,
  count: number,
  image: string,
}

interface ModalZakupyProps {
  isOpen: boolean;
  submit: (params: Inputs) => void,
  reject: () => void
}


const ModalZakupy: React.FC<ModalZakupyProps> = (props: {isOpen: boolean, submit: any, reject: any}) => {

  const {handleSubmit, setValue, register} = useForm<Inputs>();

  const submitForm = (data: Inputs) => {
    props.submit({name: data.name, description: data.description, count: data.count, image: data.image,});
  }

  const rejectForm = () => {
    setValue("name", '');
    setValue("description", '');
    setValue("count", 1);
    setValue("image", '');
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

          <IonInput
            {...register("count")}
            type="number"
            label="count"
            labelPlacement="floating"
            fill="outline"
            class="ion-margin-top"
          />

          <IonInput
            {...register("image")}
            label="image"
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

export default ModalZakupy;
