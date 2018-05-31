// The rich text area plugin
import slate from "ory-editor-plugins-slate";
import "ory-editor-plugins-slate/lib/index.css";

// The spacer plugin
import spacer from "ory-editor-plugins-spacer";
import "ory-editor-plugins-spacer/lib/index.css";

// The image plugin
import image from "ory-editor-plugins-image";
import "ory-editor-plugins-image/lib/index.css";

// The video plugin
import video from "ory-editor-plugins-video";
import "ory-editor-plugins-video/lib/index.css";

// The html5-video plugin
import html5video from "ory-editor-plugins-html5-video";
import "ory-editor-plugins-html5-video/lib/index.css";

// The native handler plugin
import native from "ory-editor-plugins-default-native";

// The divider plugin
import divider from "ory-editor-plugins-divider";

import { textPlugin } from "ory-editor-plugins";

// Define which plugins we want to use (all of the above)
const plugins = {
  content: [slate(), spacer, image, video, divider, html5video, textPlugin],
  native
};

export default plugins;
