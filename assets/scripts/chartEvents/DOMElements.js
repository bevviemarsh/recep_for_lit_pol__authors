class DOMElements {
  inputs = document.querySelectorAll("input");
  labelBtn = document.querySelector(".main__info--labels");
  clearBtn = document.querySelector(".main__info--clear");
  authorsDetails = document.querySelector(".main__info--names");
}

const elements = new DOMElements();

module.exports.elements = elements;
