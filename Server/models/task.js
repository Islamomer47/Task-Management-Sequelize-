"use strict";
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    "Task",
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      paranoid: true, // Enables soft deletes
      timestamps: true, // Adds createdAt and updatedAt timestamps
    }
  );

  Task.associate = function (models) {
    Task.belongsTo(models.User, { foreignKey: "userId" });
  };

  return Task;
};
