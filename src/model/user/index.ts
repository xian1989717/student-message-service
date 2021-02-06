export { }
const { DataTypes } = require('sequelize')
const { ormDb } = require('../../sequelize/index')

const user = ormDb.define(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    account: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true     // 唯一约束
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    isClassTeacher: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_class_teacher'
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: true
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
  user
}