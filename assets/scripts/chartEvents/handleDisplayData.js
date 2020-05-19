const { elements } = require("./DOMElements");
const { groups } = require("../graphTools/GraphGroups");

const { authorsDetails } = elements;
const { circlesGroup } = groups;

const handleDisplayData = () => {
  const getAuthorsDetails = (d) => {
    authorsDetails.innerHTML = d.authorsDetails.info
      .map(
        (data) =>
          `<div><span class="details">${data.tworca_imie}</span> <span class="details">${data.tworca_nazwisko}</span></div>`
      )
      .join("");
  };

  const handleBarsData = (e, item, data) => {
    item.forEach((circle) => circle.classList.remove("activeCircle"));
    e.target.classList.add("activeCircle");
    getAuthorsDetails(data);
  };

  circlesGroup.selectAll("circle").each((d, i, n) => {
    n[i].addEventListener("click", (e) => {
      if (n[i].classList.contains("activeCircle")) {
        return;
      }
      handleBarsData(e, n, d);
    });
  });
};

module.exports.handleDisplayData = handleDisplayData;
