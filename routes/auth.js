const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.post('/register', async (req, res) => {
    const {username, email, password, phonenumber, address } = req.body;

    try{
        const newuser = new User({username, email, password, phonenumber, address });
        await newuser.save();
        res.status(201).json({ message : 'User registered successfully '});
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
});
module.exports = router;

router.post('/login', async(req, res) => {
    const {email, password} = req.body;
    try{
        const user = await User.findOne({ email });
        if(!user){
            return res.status(404).json({ message: 'user not found'});
        }

        if (user.password !== password){
            return res.status(400).json({ message: 'invalid password'});
        }

        res.json({ message: 'Login successful', user});
    }catch (error){
        res.status(500).json({error: error.message});
    }
})

module.exports = router;