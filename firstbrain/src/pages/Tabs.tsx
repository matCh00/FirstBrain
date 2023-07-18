import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { Redirect, Route } from "react-router";
import ToDo from "./ToDo";
import Zakupy from "./Zakupy";
import Studia from "./Studia";
import Details from "./Details";
import { library, receipt, layers } from "ionicons/icons";
import { baseUrl } from "../App";


const Tabs: React.FC = () => {   
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path={baseUrl + "/app/todo"} component={ToDo} />
        <Route exact path={baseUrl + "/app/todo/details"} component={Details} />

        <Route exact path={baseUrl + "/app/zakupy"} component={Zakupy} />
        <Route exact path={baseUrl + "/app/zakupy/details"} component={Details} />

        <Route exact path={baseUrl + "/app/studia"} component={Studia} />
        <Route exact path={baseUrl + "/app/studia/details"} component={Details} />

        <Route exact path={baseUrl + "/app"}>
          <Redirect to={baseUrl + "/app/todo"} />
        </Route>
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="todo" href={baseUrl + "/app/todo"}>
          <IonIcon icon={layers}></IonIcon>
          <IonLabel>ToDo</IonLabel>
        </IonTabButton>

        <IonTabButton tab="zakupy" href={baseUrl + "/app/zakupy"}>
          <IonIcon icon={receipt}></IonIcon>
          <IonLabel>Zakupy</IonLabel>
        </IonTabButton>

        <IonTabButton tab="studia" href={baseUrl + "/app/studia"}>
          <IonIcon icon={library}></IonIcon>
          <IonLabel>Studia</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
