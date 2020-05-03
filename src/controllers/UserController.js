const connection = require('../database/connection');
const crypto = require('crypto');
const bcrypt = require('bcrypt');

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
            const { name, email } = req.body;
            let { password } = req.body;

            const cd_user = crypto.randomBytes(4).toString('HEX');

            const passHash = await bcrypt.hash(password, 10);
            password = passHash;

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

    async updatePassword(req, res, next) {

        try {
            
            const { cd_user } = req.params;
            const { email, password } = req.body;
            const updated_user = null;

            const user = await connection('tb_user').where('cd_user', cd_user)
            .select('email').first();

            if (user.email !== email) {
                return res.status(401).json({ error: 'Operação Inválida' });
            }

            await connection('tb_user').update({
                password,
                updated_user,
            }).where({ cd_user });

            return res.send();

        } catch (error) {
            next(error);
        }
    },
}
