(function IIFE() {
  const { dataActions } = require("./dataTools/DataActions");
  const { modifiedData } = require("./dataTools/getModifiedData");
  const { dataProperties } = require("./dataTools/DataProperties");

  const { getSortedData, getFilteredByProperty, checkIfTrue } = dataActions;

  const lollipopChart = (function () {
    const { chartDataStructure } = require("./dataTools/DataActions");

    const getLollipopChartData = (data) => {
      const dataForLollipopChart = data;

      getUpdatedChart(dataForLollipopChart);
    };

    const renderView = (data) => {
      console.log("data from render app", data);
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
          getSortedData(
            getFilteredByProperty(
              modifiedData,
              checkIfTrue(e.target.checked, e.target.value, 0),
              checkIfTrue(e.target.checked, e.target.dataset.range, 0),
              dataProperties.authors
            ),
            dataProperties.authors
          )
        )
      )
    );
})();
