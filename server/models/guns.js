module.exports = function (connection, Sequelize) {
  const Gun = connection.define('Gun', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    ammo_type: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    magazine_options: {
      type: Sequelize.REAL,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  return Gun;
};
