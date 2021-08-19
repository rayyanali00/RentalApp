module.exports=(sequelize, Datatypes)=>{
    const User = sequelize.define("User", {
        firstName:{
            type:Datatypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        age:{
            type:Datatypes.INTEGER,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        }
    })

    return User
}