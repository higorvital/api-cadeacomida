import Knex from "knex";

export async function seed(knex: Knex) {
    await knex('items').insert([
        {
            title: 'Pizza',
            image: 'pizza.svg'
        },

        {
            title: 'Churrasco',
            image: 'churrasco.svg'
        },
        
        {
            title: 'Fast Food',
            image: 'fast-food.svg'
        },
        
        {
            title: 'Café da Manhã',
            image: 'cafe-manha.svg'
        },
        
        {
            title: 'Bebidas',
            image: 'bebidas.svg'
        },
        
        {
            title: 'Comida Japonesa',
            image: 'comida-japonesa.svg'
        },
    ]);
}