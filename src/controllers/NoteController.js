const connection = require('../database/connection.js');

module.exports = {

    async index(req, res) {
        const { page = 1 } = req.query;

        const [contador] = await connection('tb_note').count();

        const notes = await connection('tb_note')
            .join('tb_user', 'tb_user.cd_user', '=', 'tb_note.id_user')
            .offset((page - 1) * 10)
            .select(['tb_note.*', 'tb_user.name']);

        res.header('Total-Notes', contador['count(*)']);

        return res.json(notes);
    },

    async create(req, res, next) {

        try {
            const { title, note } = req.body;
            const id_user = req.headers.authorization;

            const [id] = await connection('tb_note').insert({
                title,
                note,
                id_user,
            });

            return res.json({ id });

        } catch (error) {
            next(error)
        }
    },

    async update(req, res, next) {

        try {
            
            const { cd_note } = req.params;
            const id_user = req.headers.authorization;
            const { title, note } = req.body;
            const updateDate = null;

            const id = await connection('tb_note').where('cd_note', cd_note)
            .select('id_user').first();

            if (id.id_user !== id_user) {
                return res.status(401).json({ error: 'Operação Inválida' });
            }

            console.log(updateDate);

            await connection('tb_note').update({
                title,
                note,
                updateDate,
            }).where({ cd_note });

            return res.send();

        } catch (error) {
            next(error);
        }
    },

    async delete(req, res) {
        const { cd_note } = req.params;
        const id_user = req.headers.authorization;

        const note = await connection('tb_note').where('cd_note', cd_note)
            .select('id_user').first();

        if (note.id_user !== id_user) {
            return res.status(401).json({ error: 'Operação Inválida' });
        }

        await (await connection('tb_note').where('cd_note', cd_note).delete());

        return res.status(204).send();
    },
}
