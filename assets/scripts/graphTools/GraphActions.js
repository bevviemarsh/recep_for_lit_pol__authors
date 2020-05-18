class GraphActions {
  getElementById = (idValue) => document.getElementById(idValue);

  mapArray = (array, dataElement) =>
    array && array.length && typeof dataElement === "string"
      ? array.map((d) => d[dataElement])
      : 0;

  getMaxiumElement = (array) =>
    array && array.length ? Math.max(...array) : 0;

  getYAxisDimension = (value) => {
    if (value && typeof value === "number" && value >= 0 && value < 1000) {
      return Math.ceil(value / 100) * 100;
    } else if (value && typeof value === "number" && value >= 1000) {
      return Math.ceil(value / 1000) * 1000;
    } else {
      return 0;
    }
  };

  translate = (xValue, yValue) =>
    typeof xValue === "number" || typeof yValue === "number"
      ? `translate(${xValue}, ${yValue})`
      : `translate(0, 0)`;

  rotate = (num) => (typeof num === "number" ? `rotate(${num})` : `rotate(0)`);

  getLabelsYPosition = (item, scaleFn, rValue) =>
    item && scaleFn && typeof rValue === "number"
      ? scaleFn(item) - rValue * 1.5
      : null;
}

const graphActions = new GraphActions();

module.exports.graphActions = graphActions;
