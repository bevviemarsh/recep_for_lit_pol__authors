(function IIFE() {
  const { dataActions } = require("./dataTools/DataActions");
  const { modifiedData } = require("./dataTools/getModifiedData");
  const { dataProperties } = require("./dataTools/DataProperties");

  const { getFilteredByProperty, checkIfTrue } = dataActions;

  const lollipopChart = (function () {
    const d3 = require("d3");
    const { chartDataStructure } = require("./dataTools/DataActions");
    const { graphProperties } = require("./graphTools/GraphProperties");
    const { graphActions } = require("./graphTools/GraphActions");
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
      const { axesDurationTime, dataDurationTime } = graphProperties;
      const { rotate } = graphActions;

      scaleX.xScale.domain(data.map((d) => d.x1));
      scaleY.yScale.domain([
        0,
        Math.ceil(Math.max(...data.map((d) => d.y2)) / 100) * 100,
      ]);

      x.xAxis
        .transition()
        .duration(axesDurationTime)
        .call(d3.axisBottom(scaleX.xScale));
      x.xAxis
        .selectAll("text")
        .attr("transform", rotate(-45))
        .attr("text-anchor", "end")
        .style("font-size", "12px")
        .style("font-weight", "bold");

      y.yAxis
        .transition()
        .duration(axesDurationTime)
        .call(d3.axisLeft(scaleY.yScale).ticks(5));
      y.yAxis.selectAll("text").style("font-size", "10px");

      const lines = linesGroup.selectAll("line").data(data, (d) => d.id);
      const circles = circlesGroup.selectAll("circle").data(data, (d) => d.id);
      const labels = labelsGroup.selectAll("text").data(data, (d) => d.id);

      lines
        .enter()
        .append("line")
        .attr("x1", (d) => scaleX.xScale(d.x1))
        .attr("x2", (d) => scaleX.xScale(d.x2))
        .attr("y1", scaleY.yScale(0))
        .attr("y2", scaleY.yScale(0))
        .attr("stroke", (d) => d.lineColor)
        .attr("stroke-width", 5)
        .merge(lines)
        .transition()
        .duration(dataDurationTime)
        .attr("y2", (d) => scaleY.yScale(d.y2));

      circles
        .enter()
        .append("circle")
        .attr("cx", (d) => scaleX.xScale(d.cx))
        .attr("cy", scaleY.yScale(0))
        .attr("r", (d) => d.r)
        .attr("fill", (d) => d.circleColor)
        .attr("cursor", "pointer")
        .merge(circles)
        .transition()
        .duration(dataDurationTime)
        .attr("cy", (d) => scaleY.yScale(d.cy));

      labels
        .enter()
        .append("text")
        // .attr("class", lollipopClass.substr(1))
        .text((d) => d.text)
        .attr("x", (d) => scaleX.xScale(d.cx))
        .attr("y", scaleY.yScale(0))
        .attr("text-anchor", "middle")
        .attr("font-size", "15px")
        .attr("letter-spacing", 1)
        .merge(labels)
        .transition()
        .duration(dataDurationTime)
        .attr("y", (d) => scaleY.yScale(d.cy) - 15);

      lines.exit().remove();
      circles.exit().remove();
      labels.exit().remove();
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
