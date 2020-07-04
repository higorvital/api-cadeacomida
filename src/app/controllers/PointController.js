const Point = require('../models/Point');
const Item = require('../models/Item');
const PointItem = require('../models/PointItem');

const Yup =  require('yup');

class PointController{

    async show(req, res){
        const {id} = req.params;

        const point = await Point.findOne({
            where: {
                id
            },
            attributes: ['id', 'name', 'email', 'image', 'whatsapp', 'latitude', 'longitude', 'city', 'uf', 'description', 'image_url'],
        });

        const items = await Item.findAll({
            attributes: ['id', 'title'],
            include: [{
                model: PointItem,
                as: 'point_item',
                attributes: ['id', 'point_id', 'item_id'],
                required: true,
                where: {
                    point_id: id
                }
            }]  
        })


        return res.json({
            point,
            items
        })
    }

    async index(req, res){
        const {items} = req.query;

        const parsedItems = String(items)
        .split(',')
        .map(item => Number(item.trim()));

        const points = await Point.findAll({
            attributes: ['id', 'name', 'email', 'image', 'whatsapp', 'latitude', 'longitude', 'city', 'uf', 'description', 'image_url'],
            include: [{
                model: PointItem,
                as: 'point_item',
                attributes: ['id', 'point_id', 'item_id'],
                required: true,
                where: {
                    item_id: parsedItems
                }
            }],
        });

        return res.json({
            points
        })
    }

    async store(req, res){

        const {
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            description,
            items
        } = req.body;

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            whatsapp: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.string().required(),
            city: Yup.string().required(),
            uf: Yup.string().max(2).required(),
            description: Yup.string().required(),
            items: Yup.string().required(),
        });

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({error: "Valor de campo inválido"});
        }

        const pointExists = await Point.findOne({where: {email: req.body.email}});

        if(pointExists){
            return res.status(400).json({error: "Estabelecimento já existe"});
        }

        const {filename: path} = req.file;

        const point = await Point.create({
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            description,
            image: path,
        });

        const {id, image, image_url} = point;

        const pointItems = items
        .split(',')
        .map((item) => Number(item.trim()))
        .map((item_id) => {
            return {
                item_id,
                point_id: id,
            };
        })

        
        pointItems.forEach(async (element) => {
            await PointItem.create(element);            
        });


        return res.json({
            id,
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            description,
            image,
            image_url
        });
    }

}

module.exports = new PointController();