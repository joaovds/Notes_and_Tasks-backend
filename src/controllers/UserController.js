const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

    async index(req, res, next) {
        
        try {
            const user = await connection('tb_user').select('*');

            return res.json(user);
        } catch (error) {
            next(error);
        }
    },

    async create(req, res, next) {

        try {
            const { name, email, password } = req.body;

            const cd_user = crypto.randomBytes(4).toString('HEX');

            await connection('tb_user').insert({
                cd_user,
                name,
                email,
                password,
            });

            return res.json({ cd_user });
        } catch (error) {
            next(error);
        }
    },
}
