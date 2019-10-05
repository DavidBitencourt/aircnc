const User = require('../models/User');
module.exports = {
    async store(req, res){
        const {email} = req.body;
        //Verificando se existe o e-mail no banco -> findOne
        let user = await User.findOne({email: email});

        if(!user){
            //Se não exister o e-mail então ele é criado
            user = await User.create({email});
        }
        
        return  res.json(user);
    }
};