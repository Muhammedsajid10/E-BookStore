const userModel = require("./userSchema");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const createUser = async (req, res) => {
    const { Name, Email, Password } = req.body;
    const existingUser = await userModel.findOne({ Email })
    if (existingUser) {
        res.json('user already exist..')
    }
    else {
        const hashedPass = await bcrypt.hash(Password, 10)
        userDetails = await userModel.create({
            Name, Email, Password: hashedPass
        })
        res.json({
            Name:userDetails.Name,
            Email:userDetails.Email,
            Password:userDetails.Password,
            token:tokenGeneratioin(userDetails._id)
        })
    }

}

const tokenGeneratioin = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'1d'
    })
}

const tokenVerification = async (req, res) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // Perform any additional verification or checks as needed
      res.json({ success: true, decoded });
    } catch (error) {
      res.status(401).json({ error: 'Token verification failed' });
    }
  };



module.exports = {createUser,tokenVerification,tokenGeneratioin};