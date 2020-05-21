class DataActions {
  checkIfTrue = (condition, truthyOption, falsyOption) =>
    condition ? truthyOption : falsyOption;

  getItem = (item) => (item ? item : null);

  getHeadOfList = (array) => (array && array.length ? array[0] : null);

  getTailOfList = (array) =>
    array && array.length ? array[array.length - 1] : null;

  getFilteredByProperty = (array, filterValue, rangeValue, propertyName) =>
    array && array.length && filterValue && rangeValue && propertyName
      ? array.filter(
          (item) =>
            item[propertyName] >= filterValue && item[propertyName] < rangeValue
        )
      : [];

  getSortedData = (array, propertyName) =>
    array && array.length && propertyName
      ? array.sort((a, b) => b[propertyName] - a[propertyName])
      : [];

  getArrayFromObject = (objectName) =>
    objectName && Object.keys(objectName).length
      ? Object.entries(objectName)
      : [];

  getDataStructure = (array, headFn, tailFn, keyValue, propertyValue) =>
    array &&
    array.length &&
    headFn &&
    tailFn &&
    typeof keyValue === "string" &&
    typeof propertyValue === "string"
      ? array.map((d) => ({
          [`${keyValue}`]: headFn(d),
          [`${propertyValue}`]: tailFn(d),
        }))
      : [];

  getLiteraturesTypes = (array, propertyName) =>
    array && array.length && propertyName
      ? array.reduce((acc, curr) => [...acc, ...curr[propertyName]], [])
      : [];

  getNumberOfAuthors = (array) =>
    array && array.length
      ? array.reduce((lits, lit) => {
          lit in lits ? lits[lit]++ : (lits[lit] = 1);
          return lits;
        }, {})
      : {};

  getGroupedDataById = (array, propertyName) =>
    array && array.length && propertyName && typeof propertyName === "string"
      ? array.reduce((acc, obj) => {
          let key = obj[propertyName];
          if (!acc[key]) {
            acc[key] = [];
          }
          acc[key].push(obj);
          return acc;
        }, {})
      : {};
}

class ChartDataStructure extends DataActions {
  constructor() {
    super();
  }

  getLollipopStructure = (array, lineColorName, circleColorName, radiusValue) =>
    array.map((d, i) => ({
      id: `${d.completeInfo.id}-${d.type}-${i}-${array.length}`,
      x1: d.type,
      x2: d.type,
      y1: 0,
      y2: d.authors,
      lineColor: this.getItem(lineColorName),
      text: d.authors,
      cx: d.type,
      cy: d.authors,
      r: this.getItem(radiusValue),
      circleColor: this.getItem(circleColorName),
      tooltipText: d.type,
      authorsDetails: d.completeInfo.info,
    }));
}

const dataActions = new DataActions();
const chartDataStructure = new ChartDataStructure();

module.exports.dataActions = dataActions;
module.exports.chartDataStructure = chartDataStructure;
