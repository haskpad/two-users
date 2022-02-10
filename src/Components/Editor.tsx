import CodeMirror from '@uiw/react-codemirror';
import './Editor.css';

function Editor() {

  return (
    <CodeMirror
      value="// Hello World!"
      height="40vh"
      className="codemirror"
      onChange={(value, viewUpdate) => {
        console.log('value:', value);
      }}
    />
  );
};

export default Editor;
