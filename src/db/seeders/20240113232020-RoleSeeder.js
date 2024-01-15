"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Roles",
      [
        {
          roleName: "ADMIN",
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleName: "SUPER ADMIN",
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleName: "STAFF",
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
