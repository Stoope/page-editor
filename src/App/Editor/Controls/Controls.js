import React from "react";
// The default ui components
import { Trash, DisplayModeToggle, Toolbar } from "ory-editor-ui";
import "ory-editor-ui/lib/index.css";

const Controls = ({ editor }) => (
  <div>
    {/* <Trash editor={editor} /> */}
    <DisplayModeToggle editor={editor} />
    {/* <Toolbar editor={editor} /> */}
  </div>
);

export default Controls;
