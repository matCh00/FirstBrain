import {
  IonButton, IonButtons,
  IonContent,
  IonHeader, IonInput, IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {useForm} from "react-hook-form"


type Inputs = {
  email: string
  password: string
}

interface LoginModalProps {
  isOpen: boolean;
  submit: (params: {email: string, password: string}) => void,
  reject: () => void
}


const LoginModal: React.FC<LoginModalProps> = (props: {isOpen: boolean, submit: any, reject: any}) => {

  const {handleSubmit, setValue, register} = useForm<Inputs>();

  const submitForm = (data: Inputs) => {
    props.submit({email: data.email, password: data.password});
  }

  const rejectForm = () => {
    setValue("email", '');
    setValue("password", '');
  }


  return (
    <IonModal isOpen={props.isOpen} onIonModalDidDismiss={() => rejectForm}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Credentials</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => rejectForm}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding ion-justify-content-center">
        {/*https://www.youtube.com/watch?v=Kdgu075v2fM*/}
        <form onSubmit={handleSubmit(submitForm)}>

          <IonInput
            {...register("email")}
            label="email"
            labelPlacement="floating"
            fill="outline"
            class="margin-top-2"
          />

          <IonInput
            {...register("password")}
            label="password"
            labelPlacement="floating"
            fill="outline"
            className="margin-top-2"
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

export default LoginModal;
