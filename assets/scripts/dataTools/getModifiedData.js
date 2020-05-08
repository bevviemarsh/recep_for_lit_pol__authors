const { DATA } = require("./authors");

const getModifiedData = (data) => {
  console.log("hello from getModifiedData", data);
  return data;
};

module.exports.modifiedData = getModifiedData(DATA);
