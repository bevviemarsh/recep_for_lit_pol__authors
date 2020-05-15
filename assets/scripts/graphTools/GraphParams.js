const { graphActions } = require("./GraphActions");
const { graphProperties } = require("./GraphProperties");

const { getElementById, translate } = graphActions;
const { margin, graphMargins } = graphProperties;

module.exports.GraphParams = class GraphParams {
  constructor(idValue) {
    this.mainContainer = getElementById(idValue);
  }

  basicWidth = this.mainContainer.offsetWidth;
  svgWidth = this.basicWidth - margin;
  graphWidth = this.svgWidth - graphMargins.left - graphMargins.right;

  basicHeight = this.mainContainer.offsetHeight;
  svgHeight = this.basicHeight - margin;
  graphHeight = this.svgHeight - graphMargins.top - graphMargins.bottom;

  graphPosition = translate(graphMargins.right, graphMargins.top);
};
