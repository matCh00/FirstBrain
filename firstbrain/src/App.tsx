import {Route} from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact,
} from "@ionic/react";
import {IonReactRouter} from "@ionic/react-router";
import Tabs from "./pages/Tabs";
import "./App.css";
import Login from "./pages/Login";
import {GlobalContext, GlobalProvider} from "./utils/GlobalContext";

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
import {useContext, useEffect} from "react";


setupIonicReact();


export let baseUrl = '';

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  baseUrl = '';
} else {
  baseUrl = '/FirstBrain';
}


const App: React.FC = () => {

  const {setIsMobile} = useContext(GlobalContext);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);

    const handleViewportChange = (event: any) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addListener(handleViewportChange);
    return () => {
      mediaQuery.removeListener(handleViewportChange);
    };
  }, []);


  return (
    <IonApp>
      <GlobalProvider>
        <IonReactRouter>
          <IonRouterOutlet>

            <Route exact path={baseUrl + "/"} component={Login}/>

            <Route path={baseUrl + "/app"} component={Tabs}/>

          </IonRouterOutlet>
        </IonReactRouter>
      </GlobalProvider>
    </IonApp>
  )
};

export default App;
