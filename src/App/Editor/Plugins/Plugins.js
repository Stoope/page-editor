// The native handler plugin
import native from "ory-editor-plugins-default-native";

import {
  Image,
  Text,
  Video,
  Spacer,
  Background,
  Button
} from "ory-editor-plugins";
// } from "ory-editor-plugins/plugins/viewOnly";
import "ory-editor-plugins/plugins/index.css";

// Define which plugins we want to use (all of the above)
const plugins = {
  content: [Image, Text, Video, Spacer, Button],
  layout: [Background],
  native
};

export default plugins;
