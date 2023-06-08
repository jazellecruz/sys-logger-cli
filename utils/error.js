const errorHighlight = require("chalk").hex("#e03453")

const logError = (err) => {
  console.log(errorHighlight("There was an error in logging info:"));
  console.log(err);
}

module.exports = logError