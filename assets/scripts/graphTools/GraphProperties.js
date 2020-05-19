class GraphProperties {
  graphId = "graph";

  graphParamsProperties = {
    width: "width",
    height: "height",
    position: "position",
  };

  axesProperties = {
    scls: "scales",
    axs: "axes",
    axesTextRotateValue: -45,
    axesTextAnchorPosition: "end",
    axesFontSize: (array) => {
      if (array.length < 25) {
        return "1vw";
      } else if (array.length < 50) {
        return "0.8vw";
      } else {
        return "0.5vw";
      }
    },
    axesFontWeight: "bold",
  };

  colors = {
    richBlack: "#02111b",
    fireEngineRed: "#c1292e",
    queenBlue: "#4c6085",
    cadet: "#5d737e",
  };

  margin = 10;
  graphMargins = { top: 80, left: 20, right: 90, bottom: 100 };

  axesDurationTime = 200;
  dataDurationTime = 300;
  labelDurationTime = 250;

  strokeWidth = (array) => {
    if (array.length < 25) {
      return 5;
    } else if (array.length < 50) {
      return 3;
    } else {
      return 1;
    }
  };
  radius = (array) => {
    if (array.length < 25) {
      return 10;
    } else if (array.length < 50) {
      return 7;
    } else {
      return 4;
    }
  };

  labelsProperties = {
    labelClass: ".labelClass",
    labelTextAnchorPosition: "middle",
    labelFontSizeValue: (array) => {
      if (array.length < 25) {
        return "1.5vw";
      } else if (array.length < 50) {
        return "1vw";
      } else {
        return "0";
      }
    },
    labelLetterSpacingValue: 1,
    opacityStatus: 0,
    clickedLabel: true,
  };

  cursorType = "pointer";
}

const graphProperties = new GraphProperties();

module.exports.graphProperties = graphProperties;
