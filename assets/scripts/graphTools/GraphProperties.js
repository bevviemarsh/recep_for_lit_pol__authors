class GraphProperties {
  graphId = "graph";

  colors = {
    richBlack: "#02111b",
    fireEngineRed: "#c1292e",
    queenBlue: "#4c6085",
    cadet: "#5d737e",
  };

  margin = 10;
  graphMargins = { top: 90, left: 20, right: 90, bottom: 150 };

  radius = 10;
}

const graphProperties = new GraphProperties();

module.exports.graphProperties = graphProperties;
