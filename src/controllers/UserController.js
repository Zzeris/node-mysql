const db = require('../config/database');

module.exports = {
    async store(req, res) {
        const { name, email, password } = req.body;
        const newUser = {
            name,
            email,
            password
        };
        const user = await db.query('insert into users set ?', [newUser]);
        return res.json(user);
    },
    async index(req, res) {
        const users = await db.query('select * from users');
        return res.json(users);
    },
    async edit(req, res) {
        const { id } = req.params;
        const { name, email, password } = req.body;
        const newUser = {
            name,
            email,
            password
        };
        const user = await db.query('update users set ? where id = ?', [newUser, id]);
        return res.json(user);
    },
    async delete(req, res) {
        const { id } = req.params;
        const user = await db.query('delete from users where id = ?',[id]);
        return res.json(user);
    }
 }