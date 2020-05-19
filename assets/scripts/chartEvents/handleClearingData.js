const { graphActions } = require("../graphTools/GraphActions");

const { getAnimatedBtn } = graphActions;

const handleClearingData = () => {
  const btn = document.querySelector(".main__info--clear");

  const getAllDataCleared = () => {};

  btn.addEventListener("click", (e) => {
    getAllDataCleared();
    getAnimatedBtn(e.target, "active");

    setTimeout(() => btn.classList.remove("active"), 210);
  });
};

module.exports.handleClearingData = handleClearingData;
