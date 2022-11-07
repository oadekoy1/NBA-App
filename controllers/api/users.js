// Funcs that hold the logic of creating users in the db

const User = require('../../models/user');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


async function create(req, res) {
    try {
        // Add the user to the database
        const user = await User.create(req.body);
        // token will be a string
        const token = createJWT(user);
        // Yes, we can use res.json to send back just a string
        // The client code needs to take this into consideration
        res.json(token);
      } catch (err) {
        // Client will check for non-2xx status code
        // 400 = Bad Request
        res.status(400).json(err);
      }
  }

  async function logIn(req, res) {
    try {
      // find user on database
      const user = await User.findOne({email: req.body.email})

      if (!user){
        // if there is NO user found
        return res.status(400).json({msg: 'Invalid email or password'})
      }

      // use bcrypt to compare passwords
      const match = await bcrypt.compare(req.body.password, user.password)

      if (match){
        // if passwords match send token
        const token = createJWT(user)
        res.json(token)
      }
      
    } catch (err) {
      res.status(400).json('Bad Credentials');
    }
  }

  function checkToken(req, res) {
    // req.user will always be there for you when a token is sent
    console.log('req.user', req.user);
    res.json(req.exp);
  }

  function createJWT(user) {
    return jwt.sign(
      // data payload
      { user },
      process.env.SECRET,
      { expiresIn: '24h' }
    );
  }

  module.exports = {
    create,
    logIn,
    checkToken
  };