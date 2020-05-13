class GraphProperties {
  constructor() {
    this.colors = {
      richBlack: "#02111b",
      fireEngineRed: "#c1292e",
      queenBlue: "#4c6085",
      cadet: "#5d737e",
    };
    this.radius = 10;
  }
}

const graphProperties = new GraphProperties();

module.exports.graphProperties = graphProperties;
