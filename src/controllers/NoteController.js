const connection = require('../database/connection.js');

module.exports = {

    async create(req, res) {
        const { title, note } = req.body;
        const id_user = req.headers.authorization;

        const [id] = await connection('tb_note').insert({
            title,
            note,
            id_user,
        });
        return res.json({ id });
    },
}
