const { showHelp, showVersion } = require("./message");
const args = process.argv.slice(2);

if (args.includes("--help")) {
  showHelp();
}

if (args.includes("-v")) {
  showVersion();
}
