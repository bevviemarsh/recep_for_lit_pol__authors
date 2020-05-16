(function IIFE() {
  const { dataActions } = require("./dataTools/DataActions");
  const { modifiedData } = require("./dataTools/getModifiedData");
  const { dataProperties } = require("./dataTools/DataProperties");

  const { getFilteredByProperty, checkIfTrue } = dataActions;

  const lollipopChart = (function () {
    const d3 = require("d3");
    const { chartDataStructure } = require("./dataTools/DataActions");
    const { graphProperties } = require("./graphTools/GraphProperties");
    const { graphParams } = require("./graphTools/GraphParams");
    const { groups } = require("./graphTools/GraphGroups");
    const { axes } = require("./graphTools/AxesFactory");

    const getLollipopChartData = (data) => {
      const { colors, radius } = graphProperties;
      const { fireEngineRed, queenBlue } = colors;

      const dataForLollipopChart = data;

      getUpdatedChart(
        chartDataStructure.getLollipopStructure(
          dataForLollipopChart,
          queenBlue,
          fireEngineRed,
          radius
        )
      );
    };

    const renderView = (data) => {
      console.log("data from render", data);
      const { linesGroup, circlesGroup, labelsGroup } = groups;
      const { x, y, scaleX, scaleY } = axes;
      const { durationTime } = graphProperties;

      scaleX.xScale.domain(data.map((d) => d.x1));
      scaleY.yScale.domain([
        0,
        Math.ceil(Math.max(data.map((d) => d.y2)) / 100) * 100,
      ]);

      x.xAxis
        .transition()
        .duration(durationTime)
        .call(d3.axisBottom(scaleX.xScale));
      // x
      //   .selectAll("text")
      //   .attr("transform", rotate(axesTestRotate))
      //   .attr("text-anchor", axesTextAnchor)
      //   .style("font-size", axesFontSize)
      //   .style("font-weight", axesFontWeight);

      y.yAxis
        .transition()
        .duration(durationTime)
        .call(d3.axisLeft(scaleY.yScale).ticks(5));
      // yAxis.selectAll("text").style("font-size", axesFontSize);

      const lines = linesGroup.selectAll("line").data(data, (d) => d.id);

      lines
        .enter()
        .append("line")
        .attr("x1", (d) => scaleX.xScale(d.x1))
        .attr("x2", (d) => scaleX.xScale(d.x2))
        .attr("y1", (d) => scaleY.yScale(d.y1))
        .attr("y2", (d) => scaleY.yScale(d.y2))
        .attr("stroke", (d) => d.lineColor);
      // .transition()
      // .duration(durationTime)
      // .attr("x1", (d) => scaleX.xScale(d.x1));

      lines.exit().remove();
    };

    const getUpdatedChart = (data) => {
      renderView(data);
    };

    return { runChart: getLollipopChartData };
  })();
  document
    .querySelectorAll("input")
    .forEach((input) =>
      input.addEventListener("change", (e) =>
        lollipopChart.runChart(
          getFilteredByProperty(
            modifiedData,
            checkIfTrue(e.target.checked, e.target.value, 0),
            checkIfTrue(e.target.checked, e.target.dataset.range, 0),
            dataProperties.authors
          )
        )
      )
    );
})();
