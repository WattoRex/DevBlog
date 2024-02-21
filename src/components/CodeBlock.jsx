import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-jsx';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

const CodeBlockWithPrism = ({ code, language }) => {
    useEffect(() => {
        Prism.highlightAll();
    }, [code, language]);


    return (
        <pre className="codeblock line-numbers">
            <code className={`language-${language}`}>
                {code}
            </code>
        </pre>
    );
};

export default CodeBlockWithPrism;
