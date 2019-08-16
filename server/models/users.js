module.exports = function (connection, Sequelize) {
  const Users = connection.define('Users', {
    username: {
      type: Sequelize.STRING(30),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    password: {
      type: Sequelize.STRING(15),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    firstName: {
      type: Sequelize.STRING(30),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    dateOfBirth: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    inGameName: {
      type: Sequelize.STRING(30),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  return Users;
};
