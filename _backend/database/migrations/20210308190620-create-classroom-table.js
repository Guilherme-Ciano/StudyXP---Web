'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('classroom', { 
      id_classroom: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false, 
      },
      Class_Name: {
        type: Sequelize.STRING,
        allowNull: false,
       },
     Class_Password: {
       type: Sequelize.STRING,
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
    await queryInterface.dropTable('classroom');
  }
};
