import React, { Fragment } from "react";

import Editor, { createEmptyState } from "ory-editor-core";
import "ory-editor-core/lib/index.css";

import plugins from "./Plugins";
import Controls from "./Controls";
import EditableArea from "./EditableArea";

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

class EditorComponent extends React.Component {
  state = { content: null };
  setContent = content => {
    this.setState({ content });
    console.log(JSON.stringify(content));
  };
  getContent = () => JSON.stringify(this.state.content);
  createEditor = content => {
    this.editor = new Editor({
      plugins: plugins,
      editables: [content, createEmptyState()]
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
      cells: [
        {
          id: "fa19ae50-ccfa-472b-89e8-b23e1daf9dfc",
          inline: null,
          size: 12,
          rows: [
            {
              id: "2fdb0193-0675-46e5-abee-6f24fd309f78",
              cells: [
                {
                  id: "18e8c628-954a-4544-bde9-36686f004a03",
                  inline: null,
                  size: 12,
                  content: {
                    plugin: {
                      name: "ory/editor/core/default",
                      version: "0.0.1"
                    },
                    state: {
                      value:
                        'This is the default plugin from the core package. To replace it, set the "defaultPlugin" value in the editor config.'
                    }
                  }
                }
              ]
            },
            {
              id: "701d4f61-71bf-497e-bf10-fa072e035fa1",
              cells: [
                {
                  id: "06d8abc6-cb99-4534-a23a-5468df13fcaa",
                  inline: null,
                  size: 12,
                  content: {
                    plugin: {
                      name: "ory-editor-plugins/carousel",
                      version: "0.0.1"
                    },
                    state: {
                      cols: 2,
                      images: [
                        {
                          id: null,
                          uploaded: true,
                          type: "success",
                          cols: 2,
                          fileName: "Screenshot from 2018-06-29 16-16-25.png",
                          url:
                            "http://cbsmba.betadev.org/uploads/campus/913474ae-4e97-4ab9-80e8-42d371c710d2/screenshot_from_20180629_161625.png",
                          src:
                            "http://cbsmba.betadev.org/uploads/campus/913474ae-4e97-4ab9-80e8-42d371c710d2/screenshot_from_20180629_161625.png",
                          extension: ""
                        },
                        {
                          id: null,
                          uploaded: true,
                          type: "success",
                          cols: 2,
                          fileName: "Screenshot from 2018-06-29 16-16-31.png",
                          url:
                            "http://cbsmba.betadev.org/uploads/campus/3815b3be-7544-40a3-b17d-398adcac427c/screenshot_from_20180629_161631.png",
                          src:
                            "http://cbsmba.betadev.org/uploads/campus/3815b3be-7544-40a3-b17d-398adcac427c/screenshot_from_20180629_161631.png",
                          extension: ""
                        },
                        {
                          id: null,
                          uploaded: true,
                          type: "success",
                          cols: 2,
                          fileName: "Screenshot from 2018-06-29 16-16-34.png",
                          url:
                            "http://cbsmba.betadev.org/uploads/campus/c47f52a5-25bf-413d-977a-5f400edd4af8/screenshot_from_20180629_161634.png",
                          src:
                            "http://cbsmba.betadev.org/uploads/campus/c47f52a5-25bf-413d-977a-5f400edd4af8/screenshot_from_20180629_161634.png",
                          extension: ""
                        }
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
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
