import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import {Redirect, Route} from "react-router";
import ToDo from "./ToDo";
import Zakupy from "./Zakupy";
import Studia from "./Studia";
import Details from "./Details";
import {library, receipt, layers} from "ionicons/icons";
import {baseUrl} from "../App";
import {useContext} from "react";
import {GlobalContext} from "../utils/GlobalContext";


const Tabs: React.FC = () => {

  const {userId} = useContext(GlobalContext);


  return (
    <IonTabs>

      <IonRouterOutlet>
        <Route exact path={baseUrl + "/app"}>
          {userId !== null
            ? <Redirect to={baseUrl + "/app/todo"}/>
            : <Redirect to={baseUrl + "/"}/>
          }
        </Route>

        <Route exact path={baseUrl + "/app/todo"} component={ToDo}>
          {!userId && <Redirect to={baseUrl + "/"}/>}
        </Route>
        <Route exact path={baseUrl + "/app/todo/details"} component={Details}>
          {!userId && <Redirect to={baseUrl + "/"}/>}
        </Route>

        <Route exact path={baseUrl + "/app/zakupy"} component={Zakupy}>
          {!userId && <Redirect to={baseUrl + "/"}/>}
        </Route>
        <Route exact path={baseUrl + "/app/zakupy/details"} component={Details}>
          {!userId && <Redirect to={baseUrl + "/"}/>}
        </Route>

        <Route exact path={baseUrl + "/app/studia"} component={Studia}>
          {!userId && <Redirect to={baseUrl + "/"}/>}
        </Route>
        <Route exact path={baseUrl + "/app/studia/details"} component={Details}>
          {!userId && <Redirect to={baseUrl + "/"}/>}
        </Route>
      </IonRouterOutlet>


      <IonTabBar slot="bottom">
        <IonTabButton tab="todo" href={baseUrl + "/app/todo"}>
          <IonIcon icon={layers}></IonIcon>
          <IonLabel>ToDo</IonLabel>
        </IonTabButton>

        <IonTabButton tab="zakupy" href={baseUrl + "/app/zakupy"}>
          <IonIcon icon={receipt}></IonIcon>
          <IonLabel>Shopping</IonLabel>
        </IonTabButton>

        <IonTabButton tab="studia" href={baseUrl + "/app/studia"}>
          <IonIcon icon={library}></IonIcon>
          <IonLabel>University</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
