'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type:Sequelize.STRING,
        aloowNull: false,

      },
      email: {
        type:Sequelize.STRING,
        allowNull: false,
      },

      password: {
        type:Sequelize.STRING,
        allowNull: false,
      },
      level: {
        type:Sequelize.INTEGER,
        allowNull: false,
        defaultValue:1

      },
      company: {
        type:Sequelize.STRING,
        allowNull: false,

      },
      active: {
        type:Sequelize.BOOLEAN,
        defaultValue:true
      },
      is_logged: {
        type:Sequelize.BOOLEAN,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },


  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
