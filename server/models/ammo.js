module.exports = function (connection, Sequelize) {
  const Ammo = connection.define('Ammo', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    width: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    length: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    usedBy: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    damage: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    armorPen: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    armorDamage: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    fragmentationChance: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    ricochetChance: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    projectileSpeed: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    specialEffects: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    soldByVendor: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    soldByVendorRank: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  }, {
    freezeTableName: true
  });

  return Ammo;
};
