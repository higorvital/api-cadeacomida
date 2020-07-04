'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('points', 
      { 
        id: {
          type:Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        image: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        whatsapp: {
          type: Sequelize.STRING,
          allowNull: false
        },
        latitude: {
          type: Sequelize.DECIMAL,
          allowNull: false,
        },
        longitude: {
          type: Sequelize.DECIMAL,
          allowNull: false,
        },
        city: {
          type: Sequelize.STRING,
          allowNull: false
        },
        uf: {
          type: Sequelize.STRING(2),
          allowNull: false
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        }
      });
  },

  down: (queryInterface) => {
      return queryInterface.dropTable('points');
  }
};
