'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('point_items', 
      { 
        id: {
          type:Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        point_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: { model: 'points', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        item_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: { model: 'items', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
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
      return queryInterface.dropTable('point_items');
  }
};
