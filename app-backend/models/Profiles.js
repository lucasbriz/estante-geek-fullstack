const Profile = (sequelize, DataTypes) => {
    return sequelize.define('Profile', {
        nome: DataTypes.STRING,
        nome_usuario: DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING
    });
};

module.exports = Profile;