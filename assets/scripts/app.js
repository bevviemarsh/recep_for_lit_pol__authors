(function IIFE() {
  const { dataActions } = require("./dataTools/DataActions");
  const { modifiedData } = require("./dataTools/getModifiedData");
  const { dataProperties } = require("./dataTools/DataProperties");

  const { getFilteredByProperty, checkIfTrue } = dataActions;

  const lollipopChart = (function () {
    const { chartDataStructure } = require("./dataTools/DataActions");
    const { graphProperties } = require("./graphTools/GraphProperties");

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
