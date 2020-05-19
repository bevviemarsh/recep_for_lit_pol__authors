const { elements } = require("./DOMElements");
const { groups } = require("../graphTools/GraphGroups");
const { dataProperties } = require("../dataTools/DataProperties");
const { handleSearching } = require("./handleSearching");

const { authorsDetails } = elements;
const { circlesGroup } = groups;
const { authorFirstName, authorLastName } = dataProperties;

const handleDisplayData = () => {
  const getAuthorsDetails = (d) => {
    authorsDetails.innerHTML = d.authorsDetails
      .map(
        (data) =>
          `<ul><li class="details">${data[authorFirstName]} ${data[authorLastName]}</li></ul>`
      )
      .join("");

    handleSearching(document.querySelectorAll(".details"));
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
