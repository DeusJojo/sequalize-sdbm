const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TICKET', {
    ANNEE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NUMERO_TICKET: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DATE_VENTE: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    HEURE_VENTE: {
      type: DataTypes.TIME,
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
