module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('items', 
    [
      {
        title: 'Pizza',
        image: 'pizza.svg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Churrasco',
        image: 'churrasco.svg',
        created_at: new Date(),
        updated_at: new Date()
      },      
      {
        title: 'Fast Food',
        image: 'fast-food.svg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Café da Manhã',
        image: 'cafe-manha.svg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Bebidas',
        image: 'bebidas.svg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Comida Japonesa',
        image: 'comida-japonesa.svg',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('items', null, {});
  }
};