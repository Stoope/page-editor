import React from "react";
import { Trash, DisplayModeToggle, Toolbar } from "ory-editor-ui";
import "ory-editor-ui/lib/style.css";

const Controls = ({ editor }) => (
  <div>
    <Trash editor={editor} />
    <DisplayModeToggle editor={editor} />
    <Toolbar editor={editor} />
  </div>
);

export default Controls;
