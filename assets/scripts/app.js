(function IIFE() {
  const { modifiedData } = require("./dataTools/getModifiedData");
  const lollipopChart = (function () {
    const renderView = () => {};

    const getUpdatedChart = (data) => console.log("data from app", data);

    return { runChart: getUpdatedChart };
  })();
  lollipopChart.runChart(modifiedData);
})();
