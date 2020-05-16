const d3 = require("d3");
const { graphParams } = require("./GraphParams");

const {
  graphWidthProperties,
  graphHeightProperties,
  graphPositionProperties,
} = graphParams;

module.exports.Graph = class Graph {
  constructor(graphContainer) {
    this.svgSelection = d3.select(graphContainer).append("svg");

    this.mainSvg = this.svgSelection
      .attr("width", graphWidthProperties.basicWidth)
      .attr("height", graphHeightProperties.basicHeight)
      .append("g");

    this.mainChart = this.mainSvg
      .attr("width", graphWidthProperties.svgWidth)
      .attr("height", graphHeightProperties.svgHeight)
      .attr("transform", graphPositionProperties.graphPosition)
      .append("g");

    if (Graph.exists) {
      return Graph.instance;
    }

    Graph.instance = this;
    Graph.exists = true;
    return this;
  }
};
