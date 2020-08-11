const fs = require("fs");
const path = require("path");
const googleSheetScrapper = require("./lib/scrapper/google-sheet");
require("./lib/env");

const main = async () => {
  const { SHEET_ID, API_KEY } = process.env;
  console.log(SHEET_ID, API_KEY);
  return;
  const SCRAPED_LIST_SHEET = {
    index: 1,
    sourceFileName: "scrapedListing.json",
  };
  const BUILDER_LIST_SHEET = {
    index: 2,
    sourceFileName: "builderListing.json",
  };

  const doc = await googleSheetScrapper.loadGoogleSheetDocument(
    SHEET_ID,
    API_KEY
  );
  for (const sheetInfo of [SCRAPED_LIST_SHEET, BUILDER_LIST_SHEET]) {
    const sheet = doc.sheetsByIndex[sheetInfo.index];
    const sheetData = await googleSheetScrapper.convertSheetToJSON(sheet);
    fs.writeFileSync(
      path.join(__dirname, `source/${sheetInfo.sourceFileName}`),
      JSON.stringify(sheetData)
    );
    console.log(`finished create source ${sheetInfo.sourceFileName}`);
  }
  console.log("finished scrapper");
};
main();
