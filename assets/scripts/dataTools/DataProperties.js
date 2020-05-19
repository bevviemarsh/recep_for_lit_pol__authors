class DataProperties {
  foreignLiteratureTypeProperty = "literatura_obca";
  foreignLiteratureIdProperty = "literatura_id";
  type = "type";
  authors = "authors";
  id = "id";
  info = "info";
  authorFirstName = "tworca_imie";
  authorLastName = "tworca_nazwisko";
}

const dataProperties = new DataProperties();

module.exports.dataProperties = dataProperties;
