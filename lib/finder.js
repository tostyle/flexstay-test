const scrapedListing = require("../source/scrapedListing.json");
const builderListing = require("../source/builderListing.json");

const recordSearch = (matchingFunc, listing) => (search) => {
  return listing.filter((data) => {
    return matchingFunc(data, search);
  });
};

const matchScrappedList = (data, search) => {
  const searchString = search.toLowerCase();
  const matchedTitle = data && data.title.toLowerCase().includes(searchString);
  const matchedDesc = data && data.desc.toLowerCase().includes(searchString);
  return matchedTitle || matchedDesc;
};

const matchBuilderList = (data, search) => {
  const searchString = search.toLowerCase();
  const matchNameEng = data && data["Name En"].includes(searchString);
  const matchNameThai = data && data["Name Th"].includes(searchString);
  return matchNameEng || matchNameThai;
};
const findScapedList = recordSearch(matchScrappedList, scrapedListing);
const findBuilderList = recordSearch(matchBuilderList, builderListing);

module.exports = {
  findScapedList,
  findBuilderList,
};
