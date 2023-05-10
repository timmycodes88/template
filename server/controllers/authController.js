require('dotenv').config()
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = id =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '3d' })

module.exports.loginUser = async (req, res) => {
  const { username, email, password } = req.body
  try {
    const user = await User.login(username, email, password)

    const token = createToken(user._id)

    res.status(200).json({ user, token })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports.signUpUser = async (req, res) => {
  const { username, email, password } = req.body
  try {
    const user = await User.signup(username, email, password)

    const token = createToken(user._id)

    res.status(201).json({ user, token })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
