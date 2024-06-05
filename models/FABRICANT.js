const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FABRICANT', {
    ID_FABRICANT: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NOM_FABRICANT: {
      type: Sequelize.STRING(40),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'FABRICANT',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_FABRICANT" },
        ]
      },
    ]
  });
};
