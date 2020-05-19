const { DATA } = require("./authors");
const { dataProperties } = require("./DataProperties");
const { dataActions } = require("./DataActions");

const {
  foreignLiteratureTypeProperty,
  foreignLiteratureIdProperty,
  type,
  authors,
  id,
  info,
} = dataProperties;
const {
  getHeadOfList,
  getTailOfList,
  getSortedData,
  getArrayFromObject,
  getDataStructure,
  getLiteraturesTypes,
  getNumberOfAuthors,
  getGroupedDataById,
} = dataActions;

const authorsData = DATA;

module.exports.modifiedData = {
  literatureType: getSortedData(
    getDataStructure(
      getArrayFromObject(
        getNumberOfAuthors(
          getLiteraturesTypes(authorsData, foreignLiteratureTypeProperty)
        )
      ),
      getHeadOfList,
      getTailOfList,
      type,
      authors
    ),
    authors
  ),
  literatureInfo: getDataStructure(
    getArrayFromObject(
      getGroupedDataById(authorsData, foreignLiteratureIdProperty)
    ),
    getHeadOfList,
    getTailOfList,
    id,
    info
  ),
};
