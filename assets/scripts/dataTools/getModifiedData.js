const { DATA } = require("./authors");
const { dataProperties } = require("./DataProperties");
const { chartDataStructure } = require("./DataActions");
const { graphProperties } = require("../graphTools/GraphProperties");

const { foreignLiteratureProperty } = dataProperties;
const {
  getHeadOfList,
  getTailOfList,
  getArrayFromObject,
  getCountedAuthorsStructure,
  getLiteraturesTypes,
  getNumberOfAuthors,
  getLollipopStructure,
} = chartDataStructure;
const { colors, radius } = graphProperties;
const { queenBlue, fireEngineRed } = colors;

const authorsData = DATA;

module.exports.modifiedData = getLollipopStructure(
  getCountedAuthorsStructure(
    getArrayFromObject(
      getNumberOfAuthors(
        getLiteraturesTypes(authorsData, foreignLiteratureProperty)
      )
    ),
    getHeadOfList,
    getTailOfList
  ),
  queenBlue,
  radius,
  fireEngineRed
);
