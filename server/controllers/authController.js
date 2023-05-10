const User = require('../models/userModel')

module.exports.loginUser = async (req, res) => {
  const { username, email, password } = req.body
  try {
    const user = await User.login(username, email, password)
    res.status(200).json({ user })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports.signUpUser = async (req, res) => {
  const { username, email, password } = req.body
  try {
    const user = await User.signup(username, email, password)
    res.status(201).json({ user })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
