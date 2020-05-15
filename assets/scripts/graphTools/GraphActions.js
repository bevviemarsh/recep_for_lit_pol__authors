class GraphActions {
  getElementById = (idValue) => document.getElementById(idValue);

  translate = (xValue, yValue) =>
    typeof xValue !== "number" || typeof yValue !== "number"
      ? `translate(0, 0)`
      : `translate(${xValue}, ${yValue})`;
}

const graphActions = new GraphActions();

module.exports.graphActions = graphActions;
