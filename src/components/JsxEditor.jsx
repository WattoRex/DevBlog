import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import CodeBlockWithPrism from './CodeBlock';
import 'prismjs/components/prism-jsx';

const JSXEditor = () => {
  const [jsxCode, setJSXCode] = useState("");
  const [cssCode, setCSSCode] = useState("");

  useEffect(() => {
    // Mettre à jour la coloration syntaxique lorsque le contenu du textarea CSS change
    Prism.highlightAll();
  }, [cssCode]);

  const handleJSXChange = (event) => {
    setJSXCode(event.target.value);
  };

  const handleCSSChange = (event) => {
    setCSSCode(event.target.value);
  };

  const parseJSX = (jsxString) => {
    // Recherche des classes CSS dans le JSX et remplace className par class
    return jsxString.replace(/className=/g, "class=");
  };

  const cssCode2 = `
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0;
  }

  h1 {
    color: #333;
    text-align: center;
  }
`;

  const cssCode3 = `
  <div className="editor">
  <h2>Éditeur JSX</h2>
  <pre className="code-container">
`;

  return (
    <div className="jsx-editor-container">
      <div className="editor">
        <h2>Éditeur JSX</h2>
        <pre className="code-container">
          <code>
            <textarea
              value={jsxCode}
              onChange={handleJSXChange}
              placeholder="Saisissez votre JSX ici"
              spellCheck="false" // Désactiver la vérification orthographique
              className="vscode-textarea" // Ajouter une classe pour le style
            />
          </code>
        </pre>
        <h2>Éditeur CSS</h2>
        <pre className="code-container">
          <code>
            <textarea
              value={cssCode}
              onChange={handleCSSChange}
              placeholder="Saisissez votre CSS ici"
              spellCheck="false" // Désactiver la vérification orthographique
              className="vscode-textarea language-css" // Ajouter une classe pour le style et indiquer la langue CSS
            />
          </code>
        </pre>
      </div>
      <div className="preview">
        <h2>Prévisualisation</h2>
        <div className="preview-content">
          {jsxCode && (
            <div
              className="preview-jsx"
              dangerouslySetInnerHTML={{ __html: parseJSX(jsxCode) }}
            />
          )}
          <style>{cssCode}</style>
        </div>
      </div>
      <CodeBlockWithPrism code={cssCode2} language="css" />
      <CodeBlockWithPrism code={cssCode3} language="HTML" />

    </div>
  );
};

export default JSXEditor;

