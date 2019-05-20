'use strict'

const User = require('../entity/user');

class UserController {
    static async getUsers(req, res) {
        const users = await User.getUsers();
        console.log('EMAIL --------- ', req.user.email);

        res.json(users);
    }

    static async getUser(req, res) {
        const user = await User.getUser(req.params.id);
        res.json(user);
    }

    static async postUser(req, res) {
        let user = { email: req.body.email };
        user = await User.postUser(user);
        res.json(user);
    }

    static async updateUser(req, res) {
        const user = await User.updateUser(req.params.id, req.body.user);
        res.json(user);
    }

    static async deleteUser(req, res) {
        const user = await User.deleteUser(req.params.id);
        res.json(user);
    }

    static async login(req, res) {
        const token = await User.login(req.body.email);
        res.json(token);
    }
}

module.exports = UserController;