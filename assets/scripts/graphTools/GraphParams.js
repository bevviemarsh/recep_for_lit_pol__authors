const { graphActions } = require("./GraphActions");
const { graphProperties } = require("./GraphProperties");

const { getElementById, translate } = graphActions;
const {
  graphId,
  graphParamsProperties,
  margin,
  graphMargins,
} = graphProperties;
const { width, height, position } = graphParamsProperties;

class GraphPropertyFactory {
  constructor() {
    this.createProperties = (type) => {
      let graphProperty;
      if (type === "width") {
        graphProperty = new GraphWidthProperty();
      } else if (type === "height") {
        graphProperty = new GraphHeightProperty();
      } else if (type === "position") {
        graphProperty = new GraphPositionProperty();
      }

      return graphProperty;
    };
  }
}

class GraphContainer {
  constructor(idValue) {
    this.mainContainer = getElementById(idValue);
  }
}

class GraphWidthProperty {
  basicWidth = new GraphContainer(graphId).mainContainer.offsetWidth;
  svgWidth = this.basicWidth - margin;
  graphWidth = this.svgWidth - graphMargins.left - graphMargins.right;
}

class GraphHeightProperty {
  basicHeight = new GraphContainer(graphId).mainContainer.offsetHeight;
  svgHeight = this.basicHeight - margin;
  graphHeight = this.svgHeight - graphMargins.top - graphMargins.bottom;
}

class GraphPositionProperty {
  graphPosition = translate(graphMargins.right, graphMargins.top);
}

const factory = new GraphPropertyFactory();
const graphWidthProperties = factory.createProperties(width);
const graphHeightProperties = factory.createProperties(height);
const graphPositionProperties = factory.createProperties(position);

module.exports.graphParams = {
  graphWidthProperties,
  graphHeightProperties,
  graphPositionProperties,
};
