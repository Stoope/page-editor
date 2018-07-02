import React from "react";
import { Editable } from "ory-editor-core";

const EditableArea = ({ editor, setContent }) => {
  return (
    <div>
      <Editable editor={editor} id="1" onChange={setContent} />
    </div>
  );
};

export default EditableArea;
