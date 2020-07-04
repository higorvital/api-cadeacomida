const Sequelize = require('sequelize');

const databaseConfig = require('../config/database');

const Point =  require('../app/models/Point');
const Item = require('../app/models/Item');
const PointItem =  require('../app/models/PointItem');

const models = [Point, Item, PointItem];

class Database {
    constructor(){
        this.init();
    }

    init(){

        this.connection = new Sequelize(databaseConfig);

        models
            .map(model=>model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection.models));
    }

}

module.exports = new Database();