"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Voters", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      voterUserId: {
        type: Sequelize.STRING,
        unique: true,
      },
      voterPassword: {
        type: Sequelize.STRING,
      },
      isVoted: {
        type: Sequelize.BOOLEAN,
      },
      isWho: {
        type: Sequelize.STRING,
        defaultValue: "voter",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Voters");
  },
};
