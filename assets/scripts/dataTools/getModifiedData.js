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

const literatureType = getSortedData(
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
);

const literatureInfo = getDataStructure(
  getArrayFromObject(
    getGroupedDataById(authorsData, foreignLiteratureIdProperty)
  ),
  getHeadOfList,
  getTailOfList,
  id,
  info
);

const completeData = literatureType.map((d) => ({
  type: d.type,
  authors: d.authors,
  completeInfo: literatureInfo.find((dd) =>
    dd.info.find((ddd) =>
      ddd[foreignLiteratureTypeProperty].find((dddd) => dddd === d.type)
    )
  ),
}));

module.exports.modifiedData = completeData;
