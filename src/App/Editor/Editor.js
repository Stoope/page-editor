import React, { Fragment } from "react";

import Editor, { createEmptyState } from "ory-editor-core";
import "ory-editor-core/lib/index.css";

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
        {
          id: "1",
          cells: [
            {
              id: "bd43595a-55a8-47c6-9516-54c7821bf3a2",
              inline: null,
              size: 12,
              rows: [
                {
                  id: "ebc8a442-fc32-494e-b2a4-9c4fb46bf1a4",
                  cells: [
                    {
                      id: "bf36123f-388f-4b26-9d4d-5243e1195826",
                      inline: null,
                      size: 12,
                      layout: {
                        plugin: {
                          name: "ory-editor-plugins/background",
                          version: "0.0.1"
                        },
                        state: {
                          background:
                            "http://cbsmba.betadev.org/uploads/campus/ab44e0b7-b658-4a4a-a3a1-c2bba0a89164/sc1.jpg",
                          darken: 0.3,
                          type: "image",
                          color: ""
                        }
                      },
                      rows: [
                        {
                          id: "3bae94c0-fb0f-4e16-bf11-124307841738",
                          cells: [
                            {
                              id: "6d84f045-3731-469c-be67-9a42df05f77c",
                              inline: null,
                              size: 12,
                              content: {
                                plugin: {
                                  name: "ory-editor-plugins/text",
                                  version: "0.0.1"
                                },
                                state: {
                                  html:
                                    '<h1 class="ql-align-center"><br></h1><h1 class="ql-align-center"><span class="ql-size-huge">Бизнес-образование онлайн</span></h1><p class="ql-align-center"><br></p><p class="ql-align-center"><br></p><p class="ql-align-center"><span class="ql-size-large">Развивайте свою карьеру. Освойте новые навыки.</span></p><p class="ql-align-center"><span class="ql-size-large">Получите дипломы престижной бизнес-школы.</span></p><p class="ql-align-center"><br></p><p class="ql-align-center"><img src="https://cbsmba.com/static/media/icon1.85f028a0.svg"><strong>Занимайтесь в удобном для вас темпе на любом устройстве</strong> <strong> </strong><img src="https://cbsmba.com/static/media/icon2.f3edcbef.svg"><strong>Пробуйте бесплатно любой курс, прежде чем поступить на обучение</strong> <strong> </strong><img src="https://cbsmba.com/static/media/icon3.73e0ef5b.svg"><strong>Получай</strong><strong class="ql-size-large">﻿</strong><strong>те бессрочный доступ к материалам и обновлениям курсов</strong></p><p class="ql-align-center"><br></p><p class="ql-align-center"><br></p>'
                                }
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  id: "787cbe96-b5e1-4ae3-86cb-ddd7de046d65",
                  cells: [
                    {
                      id: "d4169638-050a-4a5d-a224-a69189aed25d",
                      inline: null,
                      size: 12,
                      content: {
                        plugin: {
                          name: "ory-editor-plugins/spacer",
                          version: "0.0.1"
                        },
                        state: {}
                      }
                    }
                  ]
                },
                {
                  id: "3e1311f5-bdfc-44ef-b641-33c414c88059",
                  cells: [
                    {
                      id: "19b85d94-deba-4133-a756-4037059f34a9",
                      inline: null,
                      size: 12,
                      layout: {
                        plugin: {
                          name: "ory-editor-plugins/background",
                          version: "0.0.1"
                        },
                        state: {
                          background:
                            "http://cbsmba.betadev.org/uploads/campus/56b4bca8-d5d6-4cd3-b791-701e0767e73c/sc1_bg.jpg",
                          darken: 0.3,
                          type: "image",
                          color: ""
                        }
                      },
                      rows: [
                        {
                          id: "c5d14b7a-2cce-4410-b159-2a319d853708",
                          cells: [
                            {
                              id: "39361ec5-b409-4999-8fa2-95bf58fa0adc",
                              inline: null,
                              size: 12,
                              content: {
                                plugin: {
                                  name: "ory-editor-plugins/text",
                                  version: "0.0.1"
                                },
                                state: {
                                  html:
                                    '<p class="ql-indent-8"><br></p><p class="ql-indent-8"><br></p><p class="ql-indent-8"><br></p><p class="ql-indent-8"><br></p><p class="ql-indent-8"><br></p><p class="ql-indent-8"><br></p><p class="ql-indent-8"><br></p><p class="ql-indent-8"><br></p><p class="ql-indent-8"><br></p><p class="ql-indent-8"><br></p><p class="ql-indent-8"><br></p><p class="ql-indent-8"><br></p><p class="ql-indent-8"><strong class="ql-size-huge">« CBS помогает достигать целей быстро и выгодно</strong></p><p class="ql-indent-8"><span class="ql-size-large">Время постоянно бросает нам вызовы. Единственный способ остаться на волне — развиваться и учиться на протяжении всей карьеры.</span></p><p class="ql-indent-8"><span class="ql-size-large">Команда CBS каждый день выкладывается на 110%, чтобы вы получали больше актуальных знаний и навыков за меньшие время и деньги,</span></p><p class="ql-indent-8"><span class="ql-size-large">чтобы у вас было все необходимое для достижения любых амбициозных целей. Жизнь не будет ждать, не останавливайтесь!»</span></p><p class="ql-indent-8">Денис Исаков, ректор City Business School</p><p class="ql-indent-8"><br></p><p class="ql-indent-8"><br></p><p class="ql-indent-8"><br></p><p class="ql-indent-8"><br></p><p class="ql-indent-8"><br></p><p class="ql-indent-8"><br></p><p class="ql-indent-8"><br></p><p class="ql-indent-8"><br></p><p class="ql-indent-8"><br></p><p class="ql-indent-8"><br></p>'
                                }
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  id: "e0dfd9ac-cb6f-4479-822a-16716ac98680",
                  cells: [
                    {
                      id: "e093441f-71ee-44c3-a648-8fe0f96a8792",
                      inline: null,
                      size: 12,
                      content: {
                        plugin: {
                          name: "ory-editor-plugins/spacer",
                          version: "0.0.1"
                        },
                        state: {}
                      }
                    }
                  ]
                },
                {
                  id: "25b0a713-9000-4f26-8743-d18ff00001dc",
                  cells: [
                    {
                      id: "2380618c-3731-4187-8a8e-f33aad8f149d",
                      inline: null,
                      size: 4,
                      content: {
                        plugin: {
                          name: "ory-editor-plugins/spacer",
                          version: "0.0.1"
                        },
                        state: { height: 287 }
                      }
                    },
                    {
                      id: "30b996f1-2017-4728-97d9-b0993b2c3015",
                      inline: null,
                      size: 4,
                      content: {
                        plugin: {
                          name: "ory-editor-plugins/video",
                          version: "0.0.1"
                        },
                        state: {
                          src: "https://www.youtube.com/watch?v=2yUqX_9REIw"
                        }
                      }
                    },
                    {
                      id: "6c674ada-e050-48c5-9cce-10af717ac3e4",
                      inline: null,
                      size: 4,
                      rows: [
                        {
                          id: "37c32a30-1f14-43cd-a732-6717e8d66831",
                          cells: [
                            {
                              id: "b3ab5ef9-eba3-4801-83bd-87b2514f5bff",
                              inline: null,
                              size: 12,
                              content: {
                                plugin: {
                                  name: "ory-editor-plugins/spacer",
                                  version: "0.0.1"
                                },
                                state: { height: 100 }
                              }
                            }
                          ]
                        },
                        {
                          id: "f2817eca-954b-4972-9809-123589e93751",
                          cells: [
                            {
                              id: "19cc65c4-3910-4396-b566-4840ef1b173f",
                              inline: null,
                              size: 12,
                              content: {
                                plugin: {
                                  name: "ory-editor-plugins/button",
                                  version: "0.0.1"
                                },
                                state: {
                                  text: "cbsmba",
                                  url: "https://cbsmba.com/",
                                  borderRadius: "5px",
                                  bgColor: "#3a7ad9",
                                  textColor: "#fff"
                                }
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
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
