const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TICKET', {
    ANNEE: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NUMERO_TICKET: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DATE_VENTE: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    HEURE_VENTE: {
      type: Sequelize.TIME,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TICKET',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ANNEE" },
          { name: "NUMERO_TICKET" },
        ]
      },
    ]
  });
};
