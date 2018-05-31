import React, { Fragment } from "react";

import Editor, { createEmptyState } from "ory-editor-core";
import "ory-editor-core/lib/index.css";

// The content state
import content from "./content.js";

import plugins from "./Plugins";
import Controls from "./Controls";
import EditableArea from "./EditableArea";

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

class EditorComponent extends React.Component {
  constructor(props) {
    super(props);
    this.editor = new Editor({
      plugins: plugins,
      // pass the content states
      editables: [
        ...content,
        // creates an empty state, basically like the line above
        createEmptyState()
      ]
    });
  }

  render() {
    return (
      <Fragment>
        <EditableArea editor={this.editor} />
        <Controls editor={this.editor} />
      </Fragment>
    );
  }
}

export default EditorComponent;
