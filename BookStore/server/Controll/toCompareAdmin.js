const adminModel = require("./adminShcema");
const bcrypt = require('bcrypt');
const { tokenGeneration } = require('./adminCreate');


const toCompareadmin = async (req, res) => {
    const { FirstName, SecondName, Email, Password } = req.body;
  
    // Check if the email and password match the stored admin details
    const adminDetails = await adminModel.findOne({ Email });
    if (!adminDetails) {
      return res.status(401).send('Invalid email or password...');
    
    }
  
    const isPasswordValid = await bcrypt.compare(Password, adminDetails.Password);
    if (!isPasswordValid) {
      return res.status(401).send('Invalid email or password...');
    
    }
  
    // If email and password are valid, generate a token
    const token = tokenGeneration(adminDetails._id);
  
    res.json({
      FirstName: adminDetails.FirstName,
      SecondName: adminDetails.SecondName,
      Email: adminDetails.Email,
      Password: adminDetails.Password,
      token,
    });
  };
  

  module.exports = toCompareadmin;