const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CONTINENT', {
    ID_CONTINENT: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NOM_CONTINENT: {
      type: Sequelize.STRING(25),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'CONTINENT',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_CONTINENT" },
        ]
      },
    ]
  });
};
