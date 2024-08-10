"use strict";
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: DataTypes.STRING,
    },
    {}
  );

  User.beforeCreate(async (user) => {
    user.password = await bcrypt.hash(user.password, 10);
  });

  User.prototype.validatePassword = function (password) {
    return bcrypt.compare(password, this.password);
  };

  User.associate = function (models) {
    User.hasMany(models.Task, { foreignKey: "userId" });
  };

  return User;
};
