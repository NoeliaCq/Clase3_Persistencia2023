const Sequelize = require('sequelize');

const sequelize = new Sequelize('PRUEBA2023', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb' 
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



class User extends Sequelize.Model {}
User.init({
  firstName: Sequelize.STRING,
  lastName:Sequelize.STRING
}, { sequelize, modelName: 'users' });


/* crea usuarios*/
sequelize.sync()
  .then(() => User.create({
    firstName: 'Pedro',
    lastName: 'Rodriguez'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

  sequelize.sync()
  .then(() => User.create({
    firstName: 'Joaquin',
    lastName: 'Gonzalez'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

  sequelize.sync()
  .then(() => User.create({
    firstName: 'Malena',
    lastName: 'Díaz'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });




