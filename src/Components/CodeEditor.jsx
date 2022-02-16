import React, { useContext, useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/python/python';
import * as CodeMirrorCollabExt from '@convergencelabs/codemirror-collab-ext';


const CodeEditor = () => {
  const [sessionParams, setSessionParams] = useState(null);
  const editorArea = React.useRef(null); 

  useEffect(() => {      
    const editor = CodeMirror.fromTextArea(
      editorArea.current,
      {
        lineNumbers: true,
        lineWrapping: true,
        scrollbarStyle: 'null',
        theme: 'default',
      }
    );
    editor.setSize("100%", "40vh");
    editor.setValue("// Hello World!");
   
    editor.on('change', (instance, { origin }) => {
      if (origin !== 'setValue') {
        console.log(instance.getValue());
      }
    });
   
   const contentManager = new CodeMirrorCollabExt.EditorContentManager({
      editor: editor,
      onInsert(index, text) {
        console.log("Insert", index, text);
      },
      onReplace(index, length, text) {
        console.log("Replace", index, length, text);
      },
      onDelete(index, length) {
        console.log("Delete", index, length);
      }
  }); 

  return () => {
      editor.toTextArea();
      contentManager.dispose();
    }
  }, [sessionParams]);

  return (
    <div>
      <textarea ref={editorArea} />
    </div>
  );
};


export default CodeEditor;
