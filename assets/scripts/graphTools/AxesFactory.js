const d3 = require("d3");
const { groups } = require("./GraphGroups");
const { graphParams } = require("./GraphParams");
const { graphActions } = require("./GraphActions");
const { graphProperties } = require("./GraphProperties");

const { xAxisGroup, yAxisGroup } = groups;
const { graphWidthProperties, graphHeightProperties } = graphParams;
const { translate } = graphActions;
const { axesProperties, colors } = graphProperties;
const { scls, axs } = axesProperties;
const { cadet } = colors;

class AxesFactory {
  createElements = (type) => {
    if (type === "scales") {
      return new Scales();
    } else if (type === "axes") {
      return new Axes();
    }
  };
}

class Scales {
  xScale = d3
    .scaleBand()
    .range([0, graphWidthProperties.graphWidth])
    .padding(1);

  yScale = d3.scaleLinear().range([graphHeightProperties.graphHeight, 0]);
}

class Axes {
  xAxis = xAxisGroup
    .attr("transform", translate(0, graphHeightProperties.graphHeight))
    .style("color", cadet);

  yAxis = yAxisGroup.style("color", cadet);
}

const factory = new AxesFactory();
const scales = factory.createElements(scls);
const axes = factory.createElements(axs);

module.exports.scalesAndAxesElements = {
  scales,
  axes,
};
