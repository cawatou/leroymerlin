const { ESLint } = require("eslint");

(async function main() {
	const eslint = new ESLint();
	const results = await eslint.lintFiles(["./**/*.js"]);
	console.log(results);
})().catch((error) => {
	process.exitCode = 1;
	console.error(error);
});