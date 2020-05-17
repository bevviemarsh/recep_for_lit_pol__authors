class GraphActions {
  getElementById = (idValue) => document.getElementById(idValue);

  translate = (xValue, yValue) =>
    typeof xValue !== "number" || typeof yValue !== "number"
      ? `translate(0, 0)`
      : `translate(${xValue}, ${yValue})`;

  rotate = (num) => (typeof num !== "number" ? `rotate(0)` : `rotate(${num})`);
}

const graphActions = new GraphActions();

module.exports.graphActions = graphActions;
