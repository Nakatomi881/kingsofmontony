"use client";

import { useState } from "react";
import styles from "./writePage.module.css";
import Image from "next/image";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

const WritePage = () => {
  // state for Draft.js editor
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  // state for dropdown toggle and input
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");

  // Function to log editor content
  const saveContent = () => {
    const contentState = editorState.getCurrentContent();
    const rawContent = JSON.stringify(convertToRaw(contentState));
    console.log("Saved Content:", rawContent);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        id="formField"
        className={styles.input}
        placeholder="Title"
        value={title}
        onChnage={(e) => setTitle(e.targe.value)}
      />
      <div className={styles.editor}>
        <button
          className={styles.button}
          id="plusButton"
          onClick={() => setOpen(!open)}
        >
          <Image src="/plus.png" alt="plusSymbol" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addbutton} id="imageButton">
              <Image
                src="/image.png"
                alt="imageSymbol"
                width={16}
                height={16}
              />
            </button>
            <button className={styles.addbutton} id="externalButton">
              <Image
                src="/external.png"
                alt="externalSymbol"
                width={16}
                height={16}
              />
            </button>
            <button className={styles.addbutton} id="videoButton">
              <Image
                src="/video.png"
                alt="videoSymbol"
                width={16}
                height={16}
              />
            </button>
          </div>
        )}
        <div className={styles.editorContainer}>
          <Editor
          className={styles.textArea}
            editorState={editorState}
            onChange={setEditorState}
            placeholder="Tell your story..."
          />
          <button className={styles.saveButton} onClick={saveContent}>
            Save Content
          </button>
        </div>
      </div>
    </div>
  );
};

export default WritePage;
