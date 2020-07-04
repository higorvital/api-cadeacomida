const {Model} = require('sequelize');
const Sequelize = require('sequelize');

class Item extends Model{
    static init(sequelize){
        super.init({
            title: Sequelize.STRING,
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
        this.hasMany(models.PointItem, {foreignKey: 'item_id', as: 'point_item'});
    }

}

module.exports = Item;