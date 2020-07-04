const Item = require('../models/Item');

class ItemController{
    
    async index(req, res){
        
        const items = await Item.findAll({
            attributes: ['id', 'title', 'image','image_url'],
        })

        return res.json(items);
    }

}

module.exports = new ItemController();