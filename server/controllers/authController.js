import User from '../models/user.js';
import jwt from 'jsonwebtoken';

const register = async (req, res) => {
  const {fullName, email, password, username} = req.body;
  try {
    const userExists = await User.findOne({email});
    const existedUsername = await User.findOne({username});
    if (userExists || existedUsername)
      return res.status(400).json({
        message: `User ${userExists?.email || existedUsername?.username} already exists`,
      });

    const user = await User.create({
      fullName,
      email,
      password,
      username,
    });

    const token = jwt.sign(user.toObject(), process.env.JWT_SECRET);
    res.cookie('jwt_token', token, {path: '/'});
    return res.status(201).json({message: 'User created successfully', user});
  } catch (err) {
    return res.status(500).json(err);
  }
};

const login = async (req, res) => {
  const {email, password} = req.body;
  try {
    const user = await User.findOne({email});
    if (!user) return res.status(400).json({message: 'User does not exist'});
    if (!(await user.isPasswordValid(password)))
      return res.status(400).json({message: 'Invalid password'});

    const token = jwt.sign(user.toObject(), process.env.JWT_SECRET);
    res.cookie('jwt_token', token, {path: '/'});
    return res.status(200).json({message: 'User logged in successfully', user});
  } catch (err) {
    return res.status(500).json(err);
  }
};

export {register, login};
