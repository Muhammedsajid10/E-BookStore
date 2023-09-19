const { tokenGeneratioin } = require("./userCreaste");
const userModel = require("./userSchema");
const bcrypt = require("bcrypt")

const toCompareUser = async (req,res) => {
    const {Email,Password} = req.body;

    const userDetails = await userModel.findOne({Email})
    if(!userDetails){
        return res.status(401).send('Inavalid Username or Password')
    }

    const isPasswordValid = await bcrypt.compare(Password,userDetails.Password)
    if(!isPasswordValid){
        return res.status(401).send('Invalid Username or Password')
    }

    const token =  tokenGeneratioin(userDetails._id)

    res.json({
        Email:userDetails.Email,
        Password:userDetails.Password,
        token
    })
}

module.exports = toCompareUser;