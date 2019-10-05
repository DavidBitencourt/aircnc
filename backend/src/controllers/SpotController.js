const Spot = require('../models/Spot');
const User = require('../models/User');
module.exports = {

    // const index = ({

    // })
    async store(req, res){
        //Acessando o arquivo
        const {file} = req.file;
        //Acessando o corpo com os informações enviadas
        const {company, techs, price} = req.body;
        //Acessando o id do usuário pelo header
        const {user_id} = req.headers;
        const user = await User.findById(user_id);

        // if(!user){
        //     return req.status(400).json({ error: 'Usuário não existe' });
        // }
        const spot = await Spot.create({
            user: user_id,
            thumbnail: file,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        })
        console.log(spot);
        return  res.json({spot})
    }
};