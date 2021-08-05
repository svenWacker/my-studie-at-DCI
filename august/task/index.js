const { showHelp, showVersion } = require("./message");
const args = process.argv.slice(2);

if (args.includes("--help")) {
  showHelp();
}

if (args.includes("-v")) {
  showVersion();
}

prepareString = (str) => {
  let newArray = str.map((word) => {
    let fixedWord = word.trim();
    return fixedWord.charAt(0).toUpperCase() + fixedWord.slice(1).toLowerCase();
  });
  console.log(newArray.join().replace(/[^a-zA-Z]/g, ""));
};

prepareString(args);
