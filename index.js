const finder = require("./lib/finder");

const searchScrapped = "ให้เช่า คอนโด ริชพาร์ค Rich park";
const scrappedResult = finder.findScapedList(searchScrapped);

const searchBuilder = "rhythm sukhumvit 36 38";
const builderResult = finder.findBuilderList(searchBuilder);

console.log(scrappedResult, builderResult);
