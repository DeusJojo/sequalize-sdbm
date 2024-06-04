const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PAYS', {
    ID_PAYS: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NOM_PAYS: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    ID_CONTINENT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'CONTINENT',
        key: 'ID_CONTINENT'
      }
    }
  }, {
    sequelize,
    tableName: 'PAYS',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_PAYS" },
        ]
      },
      {
        name: "FK_PAYS_CONTINENT",
        using: "BTREE",
        fields: [
          { name: "ID_CONTINENT" },
        ]
      },
    ]
  });
};
