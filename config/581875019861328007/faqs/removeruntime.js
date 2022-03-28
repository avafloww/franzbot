exports.answer = async client => ({
	title: `Generic steps to remove the Dalamud internal .Net runtime manually`,
	description: `General "how to delete the packaged .Net runtime" steps:\n`
		+ `1. Close the game and xivlauncher\n`
		+ `2. Go to \`%AppData%\\XIVLauncher\`\n`
		+ `3. Remove the \`runtime\` folder\n`
		+ `4. Start the game now\n`
		+ `5. Let us know if the issue persists`,
	color: client.config.EMBED_NORMAL_COLOR,
	image: {
		"url": client.config.WINDOWSEXPLORERSCREENSHOT,
	},
	footer: {
		"text": client.config.FRANZBOT_VERSION,
	},
});

exports.info = {
	name: "removeruntime",
	category: "files",
	aliases: [
		"removeruntimes",
		"badruntime",
		"deleteruntime",
		"reinstallruntime",
		"uninstallruntime",
		"badruntimes",
		"deleteruntimes",
		"reinstallruntimes",
		"uninstallruntimes",
	],
};
