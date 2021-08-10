const OxfordClient = require("./oxford-client");
const { APP_ID, APP_KEY } = require("../../config");
function flattenSenses(entries) {
  const reducer = (senses, entry) => {
    return senses.concat(entry.senses);
  };

  return entries.reduce(reducer, []);
}

function formatSense(sense, i) {
  const senseDescriptions =
    sense.shortDefinitions || sense.crossReferenceMarkers;
  return `${i + 1}. ` + senseDescriptions.join(", ");
}

function formatEntry(entry) {
  const senses = flattenSenses(entry.entries).map(formatSense).join("\n");
  return `${entry.text} (${entry.lexicalCategory.text})` + "\n" + senses;
}

function formatEntries(result) {
  return result.lexicalEntries.map(formatEntry).join("\n\n");
}

function formatResults(results) {
  return results.map(formatEntries).join("\n\n");
}

module.exports = async function dictionary(word) {
  const dictClient = new OxfordClient(APP_ID, APP_KEY);
  const data = await dictClient.getEntry(word);

  return (
    formatResults(data.results) +
    "\n\n" +
    `Provided by: ${data.metadata.provider}`
  );
};
