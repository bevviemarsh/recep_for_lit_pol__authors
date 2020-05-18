const { graphActions } = require("./GraphActions");
const { graphProperties } = require("./GraphProperties");

const { getElementById, translate } = graphActions;
const {
  graphId,
  graphParamsProperties,
  margin,
  graphMargins,
} = graphProperties;
const { top, left, right, bottom } = graphMargins;
const { width, height, position } = graphParamsProperties;

class GraphPropertyFactory {
  createProperties = (type) => {
    if (type === "width") {
      return new GraphWidthProperty();
    } else if (type === "height") {
      return new GraphHeightProperty();
    } else if (type === "position") {
      return new GraphPositionProperty();
    }
  };
}

class GraphContainer {
  constructor(idValue) {
    this.mainContainer = getElementById(idValue);
  }
}

const graphContainer = new GraphContainer(graphId);

class GraphWidthProperty {
  basicWidth = graphContainer.mainContainer.offsetWidth;
  svgWidth = this.basicWidth - margin;
  graphWidth = this.svgWidth - left - right;
}

class GraphHeightProperty {
  basicHeight = graphContainer.mainContainer.offsetHeight;
  svgHeight = this.basicHeight - margin;
  graphHeight = this.svgHeight - top - bottom;
}

class GraphPositionProperty {
  graphPosition = translate(right, top);
}

const factory = new GraphPropertyFactory();
const graphWidthProperties = factory.createProperties(width);
const graphHeightProperties = factory.createProperties(height);
const graphPositionProperties = factory.createProperties(position);

module.exports.graphParams = {
  graphContainer,
  graphWidthProperties,
  graphHeightProperties,
  graphPositionProperties,
};
