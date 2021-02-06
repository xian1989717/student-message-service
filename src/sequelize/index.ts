const Sequelize = require('sequelize')
const sequelize = new Sequelize('student', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  post: '3306',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  define: {
    freezeTableName: true,
    timestamps: false
  }
})

module.exports.ormDb = sequelize