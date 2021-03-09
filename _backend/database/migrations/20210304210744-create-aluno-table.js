'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return queryInterface.createTable('aluno', { 
       id_aluno: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
       },
       name: {
         type: Sequelize.STRING,
         allowNull: false,
        },
        ra: {
          type: Sequelize.STRING,
          allowNull: false,
        },
       email: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      grade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: { 
        type: Sequelize.DATE,
        allowNull:false,
      },
      updated_at: { 
        type: Sequelize.DATE,
        allowNull:false,
      },
      });
     
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('aluno');
  }
};
