export { }
const { DataTypes } = require('sequelize')
const { ormDb } = require('../sequelize/index')

const myClass = ormDb.define(
  'class',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    gradeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'grade_id'
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'create_time'
    },
    updateTime: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'update_time'
    },
    isRemoved: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_removed',
      defaultValue: false
    }
  }
)

module.exports = {
  myClass
}