const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

userSchema.statics.login = async function (username, email, password) {
  if (!((username || email) && password)) throw new Error('Missing fields')
  const user = await this.findOne({ $or: [{ email }, { username }] })

  if (!user) {
    if (email) throw new Error('Email does not exist')
    throw new Error('Username does not exist')
  }
  console.log(user)
  const match = await bcrypt.compare(password, user.password)

  if (!match) throw new Error('Password is incorrect')

  return user
}

userSchema.statics.signup = async function (username, email, password) {
  if (!username || !email || !password) throw new Error('Missing fields')
  const exists = await this.findOne({ $or: [{ email }, { username }] })

  if (exists) {
    if (exists.email === email) throw new Error('Email already exists')
    throw new Error('Username already exists')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const newUser = this.create({ username, email, password: hash })
  return newUser
}

module.exports = model('User', userSchema)
