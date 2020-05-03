const connection = require('../database/connection');
const bcrypt = require('bcrypt');

module.exports = {

    async create(req, res, next) {

        try {
            const { email, password } = req.body;

            const user = await connection('tb_user')
                .where({
                    'email': email,
                })
                .select(['cd_user', 'name', 'password']).first();

            if (!user) {
                return res.status(400).json({ error: 'User not found'});
            }
            
            if (!await bcrypt.compare(password, user.password)) {
                return res.status(400).json({ error: 'Incorrect user password'});
            }

            return res.json(user);
        } catch (error) {
            next(error);
        }
    }
}
