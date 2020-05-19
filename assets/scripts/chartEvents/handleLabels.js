const d3 = require("d3");
const { graphProperties } = require("../graphTools/GraphProperties");
const { graphActions } = require("../graphTools/GraphActions");

const { getAnimatedBtn } = graphActions;

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

  btn.addEventListener("click", (e) => {
    getDisplayedLabels(e);
    getAnimatedBtn(e.target, "active");
    labelsProperties.clickedLabel = !labelsProperties.clickedLabel;

    setTimeout(() => btn.classList.remove("active"), 210);
  });
};

module.exports.handleLabels = handleLabels;
