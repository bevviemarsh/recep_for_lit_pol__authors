const d3 = require("d3");
const { groups } = require("./GraphGroups");
const { graphParams } = require("./GraphParams");
const { graphActions } = require("./GraphActions");
const { graphProperties } = require("./GraphProperties");

const { xAxisGroup, yAxisGroup } = groups;
const { graphWidthProperties, graphHeightProperties } = graphParams;
const { translate } = graphActions;
const { axesProperties, colors } = graphProperties;
const { xAx, yAx, xScl, yScl } = axesProperties;
const { cadet } = colors;

class AxesFactory {
  createAxes = (type) => {
    if (type === "xAx") {
      return new xAxis();
    } else if (type === "yAx") {
      return new yAxis();
    } else if (type === "xScl") {
      return new xScale();
    } else if (type === "yScl") {
      return new yScale();
    }
  };
}

class xAxis {
  xAxis = xAxisGroup
    .attr("transform", translate(0, graphHeightProperties.graphHeight))
    .style("color", cadet);
}

class yAxis {
  yAxis = yAxisGroup.style("color", cadet);
}

class xScale {
  xScale = d3
    .scaleBand()
    .range([0, graphWidthProperties.graphWidth])
    .padding(1);
}

class yScale {
  yScale = d3.scaleLinear().range([graphHeightProperties.graphHeight, 0]);
}

const factory = new AxesFactory();
const x = factory.createAxes(xAx);
const y = factory.createAxes(yAx);
const scaleX = factory.createAxes(xScl);
const scaleY = factory.createAxes(yScl);

module.exports.axes = {
  x,
  y,
  scaleX,
  scaleY,
};
