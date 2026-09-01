import { content } from "./src/content.js";
import { config } from "./src/config.js";
const type = "extension";
function index() {
  return {
    name: "optimizer",
    editable: false,
    connect: false,
    content,
    precontent: function() {
    },
    config,
    help: {},
    package: {
      character: {
        character: {},
        translate: {}
      },
      card: {
        card: {},
        translate: {},
        list: []
      },
      skill: {
        skill: {},
        translate: {}
      },
      intro: "",
      author: "AceXa11",
      diskURL: "",
      forumURL: "",
      version: "1.0"
    },
    files: { character: [], card: [], skill: [], audio: [] }
  };
}
export {
  index as default,
  type
};
