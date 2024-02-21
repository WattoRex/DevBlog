// App.jsx

import React from "react";
import JSXEditor from "./components/JsxEditor";
import Editor from "./components/Editor";

import "./App.css";
const App = () => {
  return (
    <div>
      <h1>Éditeur JSX</h1>
      <Editor />
    </div>
  );
};

export default App;
