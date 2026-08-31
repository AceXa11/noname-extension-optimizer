import { content } from "./content";
import { config } from "./config";
export const type = "extension";

export default function (): importExtensionConfig {
	return {
		name: "Optimizer",
		editable: false,
		connect: false,
		content,
		precontent: function () { },
		config,
		help: {},
		package: {
			character: {
				character: {},
				translate: {},
			},
			card: {
				card: {},
				translate: {},
				list: [],
			},
			skill: {
				skill: {},
				translate: {},
			},
			intro: "",
			author: "AceXa11",
			diskURL: "",
			forumURL: "",
			version: "1.0",
		},
		files: { character: [], card: [], skill: [], audio: [] },
	};
}
