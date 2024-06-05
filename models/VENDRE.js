const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VENDRE', {
    ANNEE: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'TICKET',
        key: 'ANNEE'
      }
    },
    NUMERO_TICKET: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'TICKET',
        key: 'NUMERO_TICKET'
      }
    },
    ID_ARTICLE: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ARTICLE',
        key: 'ID_ARTICLE'
      }
    },
    QUANTITE: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    PRIX_VENTE: {
      type: Sequelize.DECIMAL(19,4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'VENDRE',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ANNEE" },
          { name: "NUMERO_TICKET" },
          { name: "ID_ARTICLE" },
        ]
      },
      {
        name: "FK_VENDRE_ARTICLE",
        using: "BTREE",
        fields: [
          { name: "ID_ARTICLE" },
        ]
      },
    ]
  });
};
