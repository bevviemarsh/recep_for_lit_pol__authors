const { DATA } = require("./authors");
const { dataProperties } = require("./DataProperties");
const { dataActions } = require("./DataActions");

const { foreignLiteratureProperty } = dataProperties;
const {
  getHeadOfList,
  getTailOfList,
  getArrayFromObject,
  getCountedAuthorsStructure,
  getLiteraturesTypes,
  getNumberOfAuthors,
} = dataActions;

const authorsData = DATA;

module.exports.modifiedData = getCountedAuthorsStructure(
  getArrayFromObject(
    getNumberOfAuthors(
      getLiteraturesTypes(authorsData, foreignLiteratureProperty)
    )
  ),
  getHeadOfList,
  getTailOfList
);
