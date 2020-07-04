const {Model} = require('sequelize');
const Sequelize = require('sequelize');

class Point extends Model{
    static init(sequelize){
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            whatsapp: Sequelize.STRING,
            latitude: Sequelize.DECIMAL,
            longitude: Sequelize.DECIMAL,
            city: Sequelize.STRING,
            uf: Sequelize.STRING,
            description: Sequelize.TEXT,
            image: Sequelize.STRING,
            image_url: {
                type: Sequelize.VIRTUAL,
                get(){
                    return `${process.env.APP_URL}/uploads/${this.image}`;
                }
            }
        },
        {
            sequelize
        });

        return this;
    }

    static associate(models){
        this.hasMany(models.PointItem, {foreignKey: 'point_id', as: 'point_item'});
    }

}

module.exports = Point;