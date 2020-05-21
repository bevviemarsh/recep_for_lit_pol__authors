class GraphActions {
  getElementById = (idValue) =>
    typeof idValue === "string" && idValue
      ? document.getElementById(idValue)
      : null;

  getXAxisTextDimension = (textItem, marginBottomValue) =>
    typeof textItem === "string" && typeof marginBottomValue === "number"
      ? textItem.length < marginBottomValue / 5
        ? textItem
        : `${textItem.substr(0, marginBottomValue / 6)}...`
      : "";

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
    typeof xValue === "number" && typeof yValue === "number"
      ? `translate(${xValue}, ${yValue})`
      : `translate(0, 0)`;

  rotate = (num) => (typeof num === "number" ? `rotate(${num})` : `rotate(0)`);

  getLabelsYPosition = (item, scaleFn, rValue) =>
    typeof item === "number" &&
    typeof scaleFn === "function" &&
    typeof rValue === "number"
      ? scaleFn(item) - rValue * 1.5
      : null;

  getAnimatedBtn = (item, className) =>
    item && className && typeof className === "string"
      ? item.classList.add(className)
      : null;
}

const graphActions = new GraphActions();

module.exports.graphActions = graphActions;
