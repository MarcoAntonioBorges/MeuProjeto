module.exports = (sequelize, DataType) => {
    const Products = sequelize.define('T_PRODUTO', {
        cd_produto: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nm_produto: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        ds_produto: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        dt_fabricacao: {
            type: DataType.DATE,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        },
        vl_produto: {
            type: DataType.DOUBLE,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
    }, { timestamps: false, freezeTableName: true, tableName: "T_PRODUTO" });
    return Products;
};