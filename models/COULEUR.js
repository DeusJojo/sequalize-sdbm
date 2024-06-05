const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('COULEUR', {
    ID_COULEUR: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NOM_COULEUR: {
      type: Sequelize.STRING(25),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'COULEUR',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_COULEUR" },
        ]
      },
    ]
  });
};
