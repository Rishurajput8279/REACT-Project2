const User = require('../model/userModel');

const createUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const newUser = new User({ name, email, password, role });
        const user = await newUser.save();
        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).json({ message: 'Error creating user', error });
    }
};

const getAllUser = async (req, res) => {
    try {
        const users = await User.find({});
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching users', error });
    }
};

const getUser = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching user', error });
    }
};

const editUser = async (req, res) => {
    try {
        const { name, password, role } = req.body;
        const { email } = req.params;
        const updatedUser = await User.findOneAndUpdate(
            { email },
            { name, password, role },
            { new: true }
        );
        if (!updatedUser) return res.status(404).json({ message: 'User not found' });
        return res.status(200).json(updatedUser);
    } catch (error) {
        return res.status(500).json({ message: 'Error updating user', error });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { email } = req.params;
        const deletedUser = await User.findOneAndDelete({ email });
        if (!deletedUser) return res.status(404).json({ message: 'User not found' });
        return res.status(200).json(deletedUser);
    } catch (error) {
        return res.status(500).json({ message: 'Error deleting user', error });
    }
};

module.exports = { createUser, editUser, deleteUser, getUser, getAllUser };
