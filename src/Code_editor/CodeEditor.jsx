import React, { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import { defaultCode } from './defaultCode';



const CodeEditor = () => {

  const [code, setCode] = useState(defaultCode);

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div className="code-editor">
      <Highlight theme={themes.nightOwl} code={code} language="jsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => {
                const lineProps = getLineProps({ line, key: i });
                delete lineProps.key; 
                return (
                <div key={i} {...lineProps}>
                    {line.map((token, key) => {
                    const tokenProps = getTokenProps({ token, key });
                    delete tokenProps.key;
                    return <span key={key} {...tokenProps} />;
                    })}
                </div>
                );
            })}
          </pre>
        )}
      </Highlight>
      <textarea
        value={code}
        onChange={handleCodeChange}
        spellCheck="false"
        autoCapitalize="off"
        autoComplete="on"
        autoCorrect="on"
      />
    </div>
  );
};

export default CodeEditor;