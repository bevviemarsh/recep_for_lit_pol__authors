const { elements } = require("./DOMElements");

const { searchingInput } = elements;

const handleSearching = (listElements) => {
  const search = (e) => {
    const text = e.target.value.toLowerCase();
    let tasks = [...listElements];
    tasks = tasks.filter((li) =>
      li.textContent.toLowerCase().includes(text)
        ? (li.style.display = "block")
        : (li.style.display = "none")
    );
  };

  searchingInput.addEventListener("input", search);
};

module.exports.handleSearching = handleSearching;
