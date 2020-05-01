const connection = require('../database/connection');

module.exports = {

    async create(req, res) {
        
        const { email, password } = req.body;

        const user = await connection('tb_user')
            .where({
                'email': email,
                'password': password,
            })
            .select(['name', 'cd_user']).first();

        if (!user) {
            return res.status(400).json({ error: 'Usuário não correspondente'});
        }

        return res.json(user);
    }
}
