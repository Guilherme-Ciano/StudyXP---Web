'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('professor', { 
      id_prof: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false, 
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      discipline: {
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
  await queryInterface.dropTable('professor');
}
};
