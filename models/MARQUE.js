const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MARQUE', {
    ID_MARQUE: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NOM_MARQUE: {
      type: Sequelize.STRING(40),
      allowNull: false
    },
    ID_PAYS: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'PAYS',
        key: 'ID_PAYS'
      }
    },
    ID_FABRICANT: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'FABRICANT',
        key: 'ID_FABRICANT'
      }
    }
  }, {
    sequelize,
    tableName: 'MARQUE',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_MARQUE" },
        ]
      },
      {
        name: "FK_MARQUE_FABRICANT",
        using: "BTREE",
        fields: [
          { name: "ID_FABRICANT" },
        ]
      },
      {
        name: "FK_MARQUE_PAYS",
        using: "BTREE",
        fields: [
          { name: "ID_PAYS" },
        ]
      },
    ]
  });
};
