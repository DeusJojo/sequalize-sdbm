const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TYPEBIERE', {
    ID_TYPE: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NOM_TYPE: {
      type: Sequelize.STRING(25),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TYPEBIERE',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_TYPE" },
        ]
      },
    ]
  });
};
