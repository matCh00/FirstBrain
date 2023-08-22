import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Tabs from "./pages/Tabs";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

// PROD
// export const baseUrl = '/FirstBrain';

// DEV
export let baseUrl = '';

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  baseUrl = '';
}
else {
  baseUrl = '/FirstBrain';
}


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>

        {/* <Route exact path={baseUrl + "/"} component={Login} /> */}
        <Route exact path={baseUrl + "/"}>
          <Redirect to={baseUrl + "/app"} />
        </Route>

        <Route path={baseUrl + "/app"} component={Tabs} />

        <Redirect path={baseUrl + "/app/todo"} to={baseUrl + "/"} />
        <Redirect path={baseUrl + "/app/todo/details"} to={baseUrl + "/"} />
        <Redirect path={baseUrl + "/app/zakupy"} to={baseUrl + "/"} />
        <Redirect path={baseUrl + "/app/zakupy/details"} to={baseUrl + "/"} />
        <Redirect path={baseUrl + "/app/studia"} to={baseUrl + "/"} />
        <Redirect path={baseUrl + "/app/studia/details"} to={baseUrl + "/"} />

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
