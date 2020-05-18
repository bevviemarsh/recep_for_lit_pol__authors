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
    axestextRotateValue: -45,
    axesTextAnchorPosition: "end",
    axesFontSize: "12px",
    axesFontWeight: "bold",
  };

  colors = {
    richBlack: "#02111b",
    fireEngineRed: "#c1292e",
    queenBlue: "#4c6085",
    cadet: "#5d737e",
  };

  margin = 10;
  graphMargins = { top: 80, left: 20, right: 90, bottom: 120 };

  axesDurationTime = 200;
  dataDurationTime = 300;

  strokeWidth = 5;
  radius = 10;

  labelsProperties = {
    labelClass: ".labelClass",
    labelTextAnchorPosition: "middle",
    labelFontSizeValue: "15px",
    labelLetterSpacingValue: 1,
    opacityStatus: "visible",
  };

  cursorType = "pointer";
}

const graphProperties = new GraphProperties();

module.exports.graphProperties = graphProperties;
