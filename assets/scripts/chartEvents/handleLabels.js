const d3 = require("d3");
const { graphProperties } = require("../graphTools/GraphProperties");

const handleLabels = () => {
  const { labelsProperties, labelDurationTime } = graphProperties;

  const btn = document.querySelector(".main__info--labels");

  const getDisplayedLabels = () => {
    d3.selectAll(labelsProperties.labelClass)
      .transition()
      .duration(labelDurationTime)
      .attr(
        "opacity",
        labelsProperties.clickedLabel
          ? (labelsProperties.opacityStatus = 1)
          : (labelsProperties.opacityStatus = 0)
      );
  };

  const getToggleButtonClass = (e) => e.target.classList.toggle("active");

  btn.addEventListener("click", (e) => {
    getDisplayedLabels(e);
    getToggleButtonClass(e);
    labelsProperties.clickedLabel = !labelsProperties.clickedLabel;
  });
};

module.exports.handleLabels = handleLabels;
