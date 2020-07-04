const {Model} = require('sequelize');
const Sequelize = require('sequelize');

class PointItem extends Model{
    static init(sequelize){
        super.init({
            point_id: Sequelize.INTEGER,
            item_id: Sequelize.INTEGER,
        },
        {
            sequelize
        });

        return this;
    }

    static associate(models){
        this.belongsTo(models.Point, {foreignKey: 'point_id', as: 'point'});
        this.belongsTo(models.Item, {foreignKey: 'item_id', as: 'item'});
    }

}

module.exports = PointItem;