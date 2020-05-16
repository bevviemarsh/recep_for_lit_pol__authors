const { Graph } = require("./Graph");
const { graphParams } = require("./GraphParams");

const { graphContainer } = graphParams;

const chart = new Graph(graphContainer.mainContainer);

class GraphGroups {
  constructor(mainChart) {
    this.linesGroup = mainChart.append("g");
    this.circlesGroup = mainChart.append("g");
    this.labelsGroup = mainChart.append("g");
    this.xAxisGroup = mainChart.append("g");
    this.yAxisGroup = mainChart.append("g");
  }
}

const groups = new GraphGroups(chart.mainChart);

module.exports.groups = groups;
