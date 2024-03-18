// eslint-disable-next-line
import React, { useEffect } from "react";
import Chemin from "./context/routes";
import "./css/index.css";
// import ReactGA from './configGA';
// import { hydrate, render } from "react-dom";

function App() {
  // useEffect(() => {
  //   // Suivi de page pour toutes les pages de l'application
  //   ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
  // }, []);

  return (
    <div className="App">
      <Chemin />
    </div>
  );
}


// const rootElement = document.getElementById("root");

// if (rootElement.hasChildNodes()) {
//   hydrate(<App />, rootElement);
// } else {
//   render(<App />, rootElement);
// }

export default App;
