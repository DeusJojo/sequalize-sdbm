var DataTypes = require("sequelize").DataTypes;
var _ARTICLE = require("./ARTICLE");
var _ARTICLEs = require("./ARTICLEs");
var _CONTINENT = require("./CONTINENT");
var _COULEUR = require("./COULEUR");
var _FABRICANT = require("./FABRICANT");
var _MARQUE = require("./MARQUE");
var _PAYS = require("./PAYS");
var _TICKET = require("./TICKET");
var _TYPEBIERE = require("./TYPEBIERE");
var _VENDRE = require("./VENDRE");
var _sysdiagrams = require("./sysdiagrams");

function initModels(sequelize) {
  var ARTICLE = _ARTICLE(sequelize, DataTypes);
  var ARTICLEs = _ARTICLEs(sequelize, DataTypes);
  var CONTINENT = _CONTINENT(sequelize, DataTypes);
  var COULEUR = _COULEUR(sequelize, DataTypes);
  var FABRICANT = _FABRICANT(sequelize, DataTypes);
  var MARQUE = _MARQUE(sequelize, DataTypes);
  var PAYS = _PAYS(sequelize, DataTypes);
  var TICKET = _TICKET(sequelize, DataTypes);
  var TYPEBIERE = _TYPEBIERE(sequelize, DataTypes);
  var VENDRE = _VENDRE(sequelize, DataTypes);
  var sysdiagrams = _sysdiagrams(sequelize, DataTypes);

  VENDRE.belongsTo(ARTICLE, { as: "ID_ARTICLE_ARTICLE", foreignKey: "ID_ARTICLE"});
  ARTICLE.hasMany(VENDRE, { as: "VENDREs", foreignKey: "ID_ARTICLE"});
  PAYS.belongsTo(CONTINENT, { as: "ID_CONTINENT_CONTINENT", foreignKey: "ID_CONTINENT"});
  CONTINENT.hasMany(PAYS, { as: "PAYs", foreignKey: "ID_CONTINENT"});
  ARTICLE.belongsTo(COULEUR, { as: "ID_COULEUR_COULEUR", foreignKey: "ID_COULEUR"});
  COULEUR.hasMany(ARTICLE, { as: "ARTICLEs", foreignKey: "ID_COULEUR"});
  MARQUE.belongsTo(FABRICANT, { as: "ID_FABRICANT_FABRICANT", foreignKey: "ID_FABRICANT"});
  FABRICANT.hasMany(MARQUE, { as: "MARQUEs", foreignKey: "ID_FABRICANT"});
  ARTICLE.belongsTo(MARQUE, { as: "ID_MARQUE_MARQUE", foreignKey: "ID_MARQUE"});
  MARQUE.hasMany(ARTICLE, { as: "ARTICLEs", foreignKey: "ID_MARQUE"});
  MARQUE.belongsTo(PAYS, { as: "ID_PAYS_PAY", foreignKey: "ID_PAYS"});
  PAYS.hasMany(MARQUE, { as: "MARQUEs", foreignKey: "ID_PAYS"});
  VENDRE.belongsTo(TICKET, { as: "ANNEE_TICKET", foreignKey: "ANNEE"});
  TICKET.hasMany(VENDRE, { as: "VENDREs", foreignKey: "ANNEE"});
  VENDRE.belongsTo(TICKET, { as: "NUMERO_TICKET_TICKET", foreignKey: "NUMERO_TICKET"});
  TICKET.hasMany(VENDRE, { as: "NUMERO_TICKET_VENDREs", foreignKey: "NUMERO_TICKET"});
  ARTICLE.belongsTo(TYPEBIERE, { as: "ID_TYPE_TYPEBIERE", foreignKey: "ID_TYPE"});
  TYPEBIERE.hasMany(ARTICLE, { as: "ARTICLEs", foreignKey: "ID_TYPE"});

  return {
    ARTICLE,
    ARTICLEs,
    CONTINENT,
    COULEUR,
    FABRICANT,
    MARQUE,
    PAYS,
    TICKET,
    TYPEBIERE,
    VENDRE,
    sysdiagrams,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
