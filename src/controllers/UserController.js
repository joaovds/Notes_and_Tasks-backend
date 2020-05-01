const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

    async create(req, res) {
        const { name, email, password } = req.body;

        const cd_user = crypto.randomBytes(4).toString('HEX');

        await connection('tb_user').insert({
            cd_user,
            name,
            email,
            password,
        });

        return res.json({ cd_user });
    },
}
