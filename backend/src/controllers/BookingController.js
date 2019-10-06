const Booking = require('../models/Booking');
module.exports = {
    async store(req, res){
        const {user_id} = req.headers;
        const {spot_id} = req.params;
        const {date} = req.body;

        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date
        })
        //Ao criar um spot essa função também buscas informações do objeto spot e user
        await booking.populate('spot').populate('user').execPopulate();

        return res.json(booking);
    }
};