const d3 = require("d3");
const { graphProperties } = require("./GraphProperties");
const { graphParams } = require("./GraphParams");

const { graphId } = graphProperties;

// module.exports.mainContainer = new GraphParams(graphId);
const {
  basicWidth,
  basicHeight,
  svgWidth,
  svgHeight,
  graphPosition,
} = graphParams;

module.exports.Graph = class Graph {
  constructor(graphContainer) {
    this.svgSelection = d3.select(graphContainer).append("svg");

    if (Graph.exists) {
      return Graph.instance;
    }

    Graph.instance = this;
    Graph.exists = true;
    return this;
  }

  mainSvg = this.svgSelection
    .attr("width", basicWidth)
    .attr("height", basicHeight)
    .append("g");

  mainChart = this.mainSvg
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("transform", graphPosition)
    .append("g");
};
