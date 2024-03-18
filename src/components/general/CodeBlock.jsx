import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-jsx";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

const CodeBlockWithPrism = ({ code, language }) => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        Prism.highlightAll();
    }, [code, language]);

    const handleCopy = () => {
        const el = document.createElement("textarea");
        el.value = code;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        setCopied(true);

        // Reset copied state after a short delay
        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };

    return (
        <div className="codeblock-container">
            <button className="copy-button" onClick={handleCopy}>
                {copied ? "Copied !" : "Copy"}
            </button>
            <pre className="codeblock line-numbers">
                <code className={`language-${language}`}>{code}</code>
            </pre>
        </div>
    );
};

export default CodeBlockWithPrism;
