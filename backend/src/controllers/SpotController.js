const Spot = require('../models/Spot');
const User = require('../models/User');
module.exports = {
    async index(req, res){

        const { tech } = req.query;

        const spots = await Spot.find({ techs: tech });
      
        return  res.json(spots)
    },

    async store(req, res){
        //Acessando o arquivo
        const {filename} = req.file;
        //Acessando o corpo com os informações enviadas
        const {company, techs, price} = req.body;
        //Acessando o id do usuário pelo header
        const {user_id} = req.headers;

        // const user = await User.findById(user_id);

        // if(!user){
        //     return req.status(400).json({ error: 'Usuário não existe' });
        // }
        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        })

        return  res.json(spot)
    }
};