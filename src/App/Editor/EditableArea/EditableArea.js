import React from "react";
import { Editable } from "ory-editor-core";

const EditableArea = ({ editor }) => {
  return (
    <div>
      <Editable
        editor={editor}
        id="1"
        onChange={state => {
          console.log(JSON.stringify(state));
        }}
      />
    </div>
  );
};

export default EditableArea;
