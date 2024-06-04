const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ARTICLE', {
    ID_ARTICLE: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NOM_ARTICLE: {
      type: Sequelize.STRING(60),
      allowNull: false
    },
    PRIX_ACHAT: {
      type: Sequelize.DECIMAL(19,4),
      allowNull: false
    },
    VOLUME: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    TITRAGE: {
      type: Sequelize.DOUBLE,
      allowNull: true
    },
    ID_MARQUE: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'MARQUE',
        key: 'ID_MARQUE'
      }
    },
    ID_COULEUR: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'COULEUR',
        key: 'ID_COULEUR'
      }
    },
    ID_TYPE: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'TYPEBIERE',
        key: 'ID_TYPE'
      }
    }
  }, {
    sequelize,
    tableName: 'ARTICLE',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_ARTICLE" },
        ]
      },
      {
        name: "FK_ARTICLE_COULEUR",
        using: "BTREE",
        fields: [
          { name: "ID_COULEUR" },
        ]
      },
      {
        name: "FK_ARTICLE_MARQUE",
        using: "BTREE",
        fields: [
          { name: "ID_MARQUE" },
        ]
      },
      {
        name: "FK_ARTICLE_TYPEBIERE",
        using: "BTREE",
        fields: [
          { name: "ID_TYPE" },
        ]
      },
    ]
  });
};
