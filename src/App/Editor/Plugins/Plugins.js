// The native handler plugin
import native from "ory-editor-plugins-default-native";

import {
  Image,
  Text,
  Video,
  Spacer,
  Background,
  Button,
  Carousel,
  defaultPlugin
} from "ory-editor-plugins";
// } from "ory-editor-plugins/plugins/viewOnly";
import "ory-editor-plugins/plugins/style.css";

// Define which plugins we want to use (all of the above)
const plugins = {
  content: [Image, Text, Video, Spacer, Button, Carousel],
  layout: [Background],
  native
};

export { defaultPlugin };
export default plugins;
