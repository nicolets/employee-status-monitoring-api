const User = require('../models/user');
const mongoose = require('mongoose');

async function create(req,res) {
    const user = new User(req.body);
    try {
        const savedUser = await user.save();
        res.status(201).send(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }
}

async function getAllUsers(req, res) {
    const users = await User.find({});
    res.send(users);
}

async function updateUser(req, res) {
    const { id } = req.params;
    const user = await User.findById( id );
    try {
        const newStatus = req.body.status
        user.status = newStatus
        await user.save(newStatus)
        res.send()
    } catch (e) {
        res.status(500).send(e)
    }
}

async function deleteUser(req, res) {
    const { id } = req.params;
    try {
        await User.findOneAndDelete({ _id: id });
        res.status(200).send();
    } catch(e) {
        res.sendStatus(500);
    }
}

module.exports = {
    create,
    getAllUsers,
    deleteUser,
    updateUser
}