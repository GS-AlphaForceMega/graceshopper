const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`
  // 'postgres://kekloxssodwanl:a703bcb817fd2882280c3eaa0e9bcb695cc9e61544349191c999ae6f41ec885a@ec2-54-235-132-202.compute-1.amazonaws.com:5432/d8ofj1od092m1l'
  ,
  {
    logging: false
  }
)
module.exports = db
