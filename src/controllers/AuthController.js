const connection = require('../database/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');


function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86408,
    });
}

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

            user.password = undefined;

            return res.send({
                user,
                token: generateToken({ id: user.cd_user}),
            });
        } catch (error) {
            next(error);
        }
    },
}