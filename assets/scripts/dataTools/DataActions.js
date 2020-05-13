class DataActions {
  constructor() {
    this.getItem = (item) => item;
    this.getHeadOfList = (array) => array[0];
    this.getTailOfList = (array) => array[array.length - 1];
    this.getArrayFromObject = (objectName) => Object.entries(objectName);
    this.getCountedAuthorsStructure = (array, headFn, tailFn) =>
      array.map((d) => ({
        name: headFn(d),
        authors: tailFn(d),
      }));
    this.getLiteraturesTypes = (array, propertyName) =>
      array.reduce((acc, curr) => [...acc, ...curr[propertyName]], []);
    this.getNumberOfAuthors = (array) =>
      array.reduce((lits, lit) => {
        lit in lits ? lits[lit]++ : (lits[lit] = 1);
        return lits;
      }, {});
  }
}

class ChartDataStructure extends DataActions {
  constructor() {
    super();
    this.getLollipopStructure = (
      array,
      lineColorName,
      radiusValue,
      circleColorName
    ) =>
      array.map((d, i) => ({
        id: i,
        x1: d.name,
        x2: d.name,
        y1: 0,
        y2: d.authors,
        lineColor: this.getItem(lineColorName),
        text: d.authors,
        cx: d.name,
        cy: d.authors,
        r: this.getItem(radiusValue),
        circleColor: this.getItem(circleColorName),
      }));
  }
}

const chartDataStructure = new ChartDataStructure();

module.exports.chartDataStructure = chartDataStructure;
