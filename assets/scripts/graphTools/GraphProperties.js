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
    axesFontSize: "1vw",
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

  strokeWidth = 5;
  radius = 10;

  labelsProperties = {
    labelClass: ".labelClass",
    labelTextAnchorPosition: "middle",
    labelFontSizeValue: "1.5vw",
    labelLetterSpacingValue: 1,
    opacityStatus: "visible",
  };

  cursorType = "pointer";
}

const graphProperties = new GraphProperties();

module.exports.graphProperties = graphProperties;
