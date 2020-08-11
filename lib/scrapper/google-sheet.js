const { GoogleSpreadsheet } = require("google-spreadsheet");

const loadGoogleSheetDocument = async (sheetId, apiKey) => {
  const doc = new GoogleSpreadsheet(sheetId);
  doc.useApiKey(apiKey);
  await doc.loadInfo();
  return doc;
};

const convertSheetToJSON = async (sheet) => {
  const rows = await sheet.getRows({
    offset: 0,
  });

  const dataList = rows.map((row) => {
    const data = {};
    const headers = sheet.headerValues;
    headers.forEach((header) => {
      data[header] = row[header];
    });
    return data;
  });
  return dataList;
};

module.exports = {
  loadGoogleSheetDocument,
  convertSheetToJSON,
};
