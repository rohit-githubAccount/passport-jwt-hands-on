'use strict'

const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

class User {
    static async getUsers() {
        const users = await userModel.find();

        return users;
    }

    static async getUser(userId) {
        const user = await userModel.findById(userId);
        return user;
    }

    static async postUser(newUser) {
        const user = new userModel(newUser);
        return await user.save();
    }

    static async updateUser(userId, updateObj) {
        let user = await userModel.findById(userId);
        if (!user) {
            return { message: `User doesn't exists` };
        }

        user.email = updateObj.email;
        return await user.save();
    }

    static async deleteUser(userId) {
        const user = await userModel.findByIdAndDelete(userId);
        if (!user) {
            return { message: `User doesn't exists` };
        }
        return user;
    }

    static async login(email) {
        const user = await userModel.findOne({ email });
        console.log(user);

        if (user) {
            const token = await jwt.sign({ email }, 'secretKey');
            return { token };
        }
    }
}

module.exports = User;