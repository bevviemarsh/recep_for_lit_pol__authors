const { elements } = require("./DOMElements");
const { graphActions } = require("../graphTools/GraphActions");
const { groups } = require("../graphTools/GraphGroups");

const { clearBtn } = elements;
const { getAnimatedBtn } = graphActions;
const { circlesGroup } = groups;

const handleClearingData = () => {
  const getAllDataCleared = () => {
    document.querySelector(".main__info--names").innerHTML = "";
    circlesGroup
      .selectAll("circle")
      .each((d, i, n) => n[i].classList.remove("activeCircle"));
  };

  clearBtn.addEventListener("click", (e) => {
    getAllDataCleared();
    getAnimatedBtn(e.target, "active");

    setTimeout(() => clearBtn.classList.remove("active"), 210);
  });
};

module.exports.handleClearingData = handleClearingData;
