const { Graph, mainContainer } = require("./Graph");

module.exports.graph = new Graph(mainContainer);

module.exports.GraphGroups = class GraphGroups {
  constructor(mainChart) {
    this.linesGroup = mainChart.append("g");
    this.circlesGroup = mainChart.append("g");
    this.labelsGroup = mainChart.append("g");
    this.xAxisGroup = mainChart.append("g");
    this.yAxisGroup = mainChart.append("g");
  }
};
