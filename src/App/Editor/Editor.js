import React, { Fragment } from "react";

import Editor, { createEmptyState } from "ory-editor-core";
import "ory-editor-core/lib/index.css";

import plugins, { defaultPlugin } from "./Plugins";
import Controls from "./Controls";
import EditableArea from "./EditableArea";

class EditorComponent extends React.Component {
  state = { content: null };
  setContent = content => {
    this.setState({ content });
    // console.log(JSON.stringify(content));
  };
  getContent = () => JSON.stringify(this.state.content);
  createEditor = content => {
    this.editor = new Editor({
      plugins: plugins,
      editables: [content, createEmptyState()],
      defaultPlugin
    });
    this.setState({ content });
  };
  setPageEditorContent = content => {
    this.editor.trigger.editable.add(JSON.parse(content));
    this.setState({ content: JSON.parse(content) });
  };
  constructor(props) {
    super(props);
    window.getPageEditorContent = this.getContent;
    window.setPageEditorContent = this.setPageEditorContent;
    this.createEditor({
      id: "1",
      cells: []
    });
  }

  render() {
    return (
      <Fragment>
        <EditableArea setContent={this.setContent} editor={this.editor} />
        <Controls editor={this.editor} />
      </Fragment>
    );
  }
}

export default EditorComponent;
