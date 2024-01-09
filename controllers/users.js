const users = require('../data.js');
const User = require('../models/User.js');

const getUsers = (req, res) => {
    User.find({})
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(404).json({  Message: 'User not found' }));
}

const getUser = (req, res) => {
    User.findOne({ _id: req.params.userID })
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(404).json({ Message: 'User not found' }));
}

const createUser = (req, res) => {
    User.create(req.body)
        .then(result => res.status(201).json({ result }))
        .catch(error => res.status(406).json({ Message: 'User not created' }));
}

const updateUser = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.userID }, req.body, { new: true, runValidators: true })
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(404).json({ Message: 'User not found' }));
}

const deleteUser = (req, res) => {
    User.findOneAndDelete({ _id: req.params.userID })
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(404).json({ Message: 'User not found' }));
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}