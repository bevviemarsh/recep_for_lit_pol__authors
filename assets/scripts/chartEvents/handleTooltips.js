const d3 = require("d3");
const d3tip = require("d3-tip");
const { groups } = require("../graphTools/GraphGroups");
const { graphProperties } = require("../graphTools/GraphProperties");

const tip = d3tip(d3);
const { circlesGroup } = groups;
const { margin } = graphProperties;

const handleTooltips = () => {
  const getTooltipContent = (d) => `<div>${d.tooltipText}</div>`;

  tip
    .attr("class", "tip")
    .offset([-margin * 3, 0])
    .html((d) => getTooltipContent(d));

  circlesGroup
    .selectAll("circle")
    .call(tip)
    .on("mouseover", (d, i, n) => tip.show(d, n[i]))
    .on("mouseout", () => tip.hide());
};

module.exports.handleTooltips = handleTooltips;
