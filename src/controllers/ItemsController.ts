import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
    async index(request: Request, response: Response) {
        const items = await knex('items').select('*');

        const serializediItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://192.168.1.101:3333/uploads/${item.image}`,
            };
        });

        return response.json(serializediItems);
    };
};

export default ItemsController;