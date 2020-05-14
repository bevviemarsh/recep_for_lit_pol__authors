const { DATA } = require("./authors");
const { dataProperties } = require("./DataProperties");
const { dataActions } = require("./DataActions");

const { foreignLiteratureProperty, authors } = dataProperties;
const {
  getHeadOfList,
  getTailOfList,
  getSortedData,
  getArrayFromObject,
  getCountedAuthorsStructure,
  getLiteraturesTypes,
  getNumberOfAuthors,
} = dataActions;

const authorsData = DATA;

module.exports.modifiedData = getSortedData(
  getCountedAuthorsStructure(
    getArrayFromObject(
      getNumberOfAuthors(
        getLiteraturesTypes(authorsData, foreignLiteratureProperty)
      )
    ),
    getHeadOfList,
    getTailOfList
  ),
  authors
);
