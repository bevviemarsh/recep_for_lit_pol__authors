(function IIFE() {
  const { elements } = require("./chartEvents/DOMElements");
  const { modifiedData } = require("./dataTools/getModifiedData");
  const { dataActions } = require("./dataTools/DataActions");
  const { dataProperties } = require("./dataTools/DataProperties");
  const { handleLabels } = require("./chartEvents/handleLabels");
  const { handleClearingData } = require("./chartEvents/handleClearingData");
  const { handleTooltips } = require("./chartEvents/handleTooltips");
  const { handleDisplayData } = require("./chartEvents/handleDisplayData");

  const { inputs } = elements;
  const { getFilteredByProperty, checkIfTrue } = dataActions;
  const { authors } = dataProperties;

  const lollipopChart = (function () {
    const d3 = require("d3");
    const { chartDataStructure } = require("./dataTools/DataActions");
    const { graphProperties } = require("./graphTools/GraphProperties");
    const { graphActions } = require("./graphTools/GraphActions");
    const { groups } = require("./graphTools/GraphGroups");
    const { scalesAndAxesElements } = require("./graphTools/AxesFactory");

    const getLollipopChartData = (data) => {
      const { colors, radius } = graphProperties;
      const { fireEngineRed, queenBlue } = colors;

      const dataForLollipopChart = data;

      getUpdatedChart(
        chartDataStructure.getLollipopStructure(
          dataForLollipopChart,
          queenBlue,
          fireEngineRed,
          radius(dataForLollipopChart)
        )
      );
    };

    const renderView = (data) => {
      console.log("data from render", data);
      const { linesGroup, circlesGroup, labelsGroup } = groups;
      const { scales, axes } = scalesAndAxesElements;
      const {
        radius,
        axesDurationTime,
        dataDurationTime,
        colors,
        axesProperties,
        labelsProperties,
        strokeWidth,
        cursorType,
        graphMargins,
      } = graphProperties;
      const { richBlack } = colors;
      const {
        axesTextRotateValue,
        axesTextAnchorPosition,
        axesFontSize,
        axesFontWeight,
      } = axesProperties;
      const {
        labelClass,
        labelTextAnchorPosition,
        labelFontSizeValue,
        labelLetterSpacingValue,
        opacityStatus,
      } = labelsProperties;
      const {
        getXAxisTextDimension,
        mapArray,
        getMaxiumElement,
        getYAxisDimension,
        rotate,
        getLabelsYPosition,
      } = graphActions;

      scales.xScale.domain(mapArray(data, "x1"));
      scales.yScale.domain([
        0,
        getYAxisDimension(getMaxiumElement(mapArray(data, "y2"))),
      ]);

      axes.xAxis
        .transition()
        .duration(axesDurationTime)
        .call(
          d3
            .axisBottom(scales.xScale)
            .tickFormat((d) => getXAxisTextDimension(d, graphMargins.bottom))
        );
      axes.xAxis
        .selectAll("text")
        .attr("transform", rotate(axesTextRotateValue))
        .attr("text-anchor", axesTextAnchorPosition)
        .style("font-size", axesFontSize(data))
        .style("font-weight", axesFontWeight);

      axes.yAxis
        .transition()
        .duration(axesDurationTime)
        .call(d3.axisLeft(scales.yScale).ticks(5));
      axes.yAxis.selectAll("text").style("font-size", axesFontSize(data));

      const lines = linesGroup.selectAll("line").data(data, (d) => d.id);
      const circles = circlesGroup.selectAll("circle").data(data, (d) => d.id);
      const labels = labelsGroup.selectAll("text").data(data, (d) => d.id);

      lines
        .enter()
        .append("line")
        .attr("x1", (d) => scales.xScale(d.x1))
        .attr("x2", (d) => scales.xScale(d.x2))
        .attr("y1", scales.yScale(0))
        .attr("y2", scales.yScale(0))
        .attr("stroke", (d) => d.lineColor)
        .attr("stroke-width", strokeWidth(data))
        .merge(lines)
        .transition()
        .duration(dataDurationTime)
        .attr("y2", (d) => scales.yScale(d.y2));

      circles
        .enter()
        .append("circle")
        .attr("cx", (d) => scales.xScale(d.cx))
        .attr("cy", scales.yScale(0))
        .attr("r", (d) => d.r)
        .attr("fill", (d) => d.circleColor)
        .attr("cursor", cursorType)
        .merge(circles)
        .transition()
        .duration(dataDurationTime)
        .attr("cy", (d) => scales.yScale(d.cy));

      labels
        .enter()
        .append("text")
        .attr("class", labelClass.substr(1))
        .text((d) => d.text)
        .attr("x", (d) => scales.xScale(d.cx))
        .attr("y", scales.yScale(0))
        .attr("text-anchor", labelTextAnchorPosition)
        .attr("font-size", labelFontSizeValue(data))
        .attr("letter-spacing", labelLetterSpacingValue)
        .attr("fill", richBlack)
        .attr("opacity", opacityStatus)
        .merge(labels)
        .transition()
        .duration(dataDurationTime)
        .attr("y", (d) =>
          getLabelsYPosition(d.cy, scales.yScale, radius(data))
        );

      lines.exit().remove();
      circles.exit().remove();
      labels.exit().remove();
    };

    const getUpdatedChart = (data) => {
      renderView(data);
    };

    return { runChart: getLollipopChartData };
  })();
  inputs.forEach((input) =>
    input.addEventListener("change", (e) => {
      if (e.target.checked) {
        lollipopChart.runChart(
          getFilteredByProperty(
            modifiedData,
            checkIfTrue(e.target.checked, e.target.value, 0),
            checkIfTrue(e.target.checked, e.target.dataset.range, 0),
            authors
          )
        );

        inputs.forEach((input) => (input.checked = false));
        e.target.checked = true;
        handleTooltips();
        handleDisplayData();
      } else {
        lollipopChart.runChart([]);
      }
    })
  );
  lollipopChart.runChart([]);
  handleLabels();
  handleClearingData();
})();
