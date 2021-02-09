// module.exports = {
//   development: {
//     dialect: "sqlite",
//     storage: "./db.development.sqlite"
//   },
//   test: {
//     dialect: "sqlite",
//     storage: ":memory:"
//   },
//   dev: {
//     username: "manifestUser",
//     password: "manifestPassword",
//     database: "SimpleBlogDB",
//     host: "manifestdbinstance.cgq0reqixqsd.us-east-1.rds.amazonaws.com",
//     dialect: 'postgres' 
//   },
//   production: {
//     // username: process.env.DB_USERNAME,
//     // password: process.env.DB_PASSWORD,
//     // database: process.env.DB_NAME,
//     // host: process.env.DB_HOSTNAME,
//     // dialect: 'postgres' 
//     username: "manifestUser",
//     password: "manifestPassword",
//     database: "SimpleBlogDB",
//     host: "manifestdbinstance.cgq0reqixqsd.us-east-1.rds.amazonaws.com",
//     dialect: 'postgres' 
//   }
// };

module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./db.development.sqlite"
  },
  test: {
    dialect: "sqlite",
    storage: ":memory:"
  },
  dev: {
    username: "qhmaiihh",
    password: "XFvK2KGbm99qAJsFYMdpLVm50rmUBCKe",
    database: "qhmaiihh",
    host: "ziggy.db.elephantsql.com",
    dialect: 'postgres' 
  },
  production: {
    // username: process.env.DB_USERNAME,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_NAME,
    // host: process.env.DB_HOSTNAME,
    // dialect: 'postgres' 
    username: "qhmaiihh",
    password: "XFvK2KGbm99qAJsFYMdpLVm50rmUBCKe",
    database: "Sqhmaiihh",
    host: "ziggy.db.elephantsql.com",
    dialect: 'postgres' 
  }
};
// const Sequelize = require('sequelize');
// const db = new Sequelize('postgres://qhmaiihh:XFvK2KGbm99qAJsFYMdpLVm50rmUBCKe@ziggy.db.elephantsql.com:5432/qhmaiihh');


// module.exports = db;
