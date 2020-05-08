const { DATA } = require("./authors");
const { dataProperties } = require("./DataProperties");
const { graphProperties } = require("../graphTools/GraphProperties");

const getModifiedData = (data) => {
  const { foreignLiteratureProperty } = dataProperties;
  const { colors } = graphProperties;
  const { richBlack, fireEngineRed, queenBlue, cadet } = colors;

  console.log("prop?", foreignLiteratureProperty);
  console.log("colors?", richBlack, fireEngineRed, queenBlue, cadet);
  //   console.log("hello from getModifiedData", data);
  return data;
};

module.exports.modifiedData = getModifiedData(DATA);
