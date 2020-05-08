(function IIFE() {
  const { modifiedData } = require("./dataTools/getModifiedData");
  const lollipopChart = (function () {
    const renderView = () => {};

    const getUpdatedChart = (data) => {};

    return { runChart: getUpdatedChart };
  })();
  lollipopChart.runChart(modifiedData);
})();
