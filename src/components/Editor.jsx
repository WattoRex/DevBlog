import React, { useEffect, useState } from 'react';
// import "prismjs/themes/prism-okaidia.css";
import CodeBlockWithPrism from './CodeBlock';

const CodePlayground = () => {
    const [jsxTabActive, setJsxTabActive] = useState(true);
    const [jsxCode, setJSXCode] = useState(`import React from 'react';

        const App = () => {
            return (
                <div>
                    <button>Click Me</button>
                </div>
            );
        };

        export default App;
    `);

    const [cssCode, setCSSCode] = useState(`
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f0f0f0;
            padding: 20px;
        }

        button {
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #0056b3;
        }
    `);

    const [preview, setPreview] = useState('');

    useEffect(() => {
        const updatePreview = () => {
            setPreview(
                <div>
                    <style>{cssCode}</style>
                    <div dangerouslySetInnerHTML={{ __html: jsxCode }} />
                </div>
            );
        };

        updatePreview();
    }, [jsxCode, cssCode]);

    return (
        <div className="container">
            <div className="sidebar">
                <button onClick={() => setJsxTabActive(true)}>JSX</button>
                <button onClick={() => setJsxTabActive(false)}>CSS</button>
                {jsxTabActive ? (
                    <CodeBlockWithPrism code={jsxCode} language="jsx" className="jsx-code" />
                ) : (
                    <CodeBlockWithPrism code={cssCode} language="css" />
                )}
            </div>
            <div className="preview">
                {preview}
            </div>
        </div>
    );
};

export default CodePlayground;
