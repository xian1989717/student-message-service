export { }
const { DataTypes } = require('sequelize')
const { ormDb } = require('../../sequelize/index')

const student = ormDb.define(
  'student',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    classId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'class_id'
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    gender: {
      type: DataTypes.ENUM('male', 'female'),
      allowNull: false
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    nationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'nation_id'
    },
    nativePlace: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'native_place'
    },
    permanentAddress: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'permanent_address'
    },
    liveAdress: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'live_adress'
    },
    temporaryStudy: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'temporary_study'
    },
    sosPerson: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'sos_person'
    },
    sosPersonPhone: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'sos_person_phone'
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
  student
}