const adminModel = require('./adminShcema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


  const createAdmin = async (req,res) => {
        const {FirstName,SecondName,Email,Password} = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(Password,salt)
        const adminDetails = await adminModel.create({
            FirstName,
            SecondName,
            Email,
            Password:hashedPass
        })
        res.json({
            FirstName:adminDetails.FirstName,
            SecondName:adminDetails.SecondName,
            Email:adminDetails.Email,
            Password:adminDetails.Password,
            token:tokenGeneration(adminDetails._id)
        })
    }


const tokenGeneration = (id) => {
  // Your existing tokenGeneration implementation here
  return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
       });
};

const verifyToken = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Perform any additional verification or checks as needed
    res.json({ success: true, decoded });
  } catch (error) {
    res.status(401).json({ error: 'Token verification failed' });
  }
};

module.exports = { createAdmin, verifyToken, tokenGeneration };





















// const adminModel = require('./adminShcema');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const createAdmin = async (req, res) => {
//   try {
//     const { FirstName, SecondName, Email, Password } = req.body;
//     const missingFields = [];

//     if (!FirstName) missingFields.push('FirstName');
//     if (!SecondName) missingFields.push('SecondName');
//     if (!Email) missingFields.push('Email');
//     if (!Password) missingFields.push('Password');

//     if (missingFields.length > 0) {
//       return res.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
//     }

//     const saltRounds = 10;
//     const salt = await bcrypt.genSalt(saltRounds);
//     const hashedPass = await bcrypt.hash(Password, salt);

//     const adminDetails = await adminModel.create({
//       FirstName,
//       SecondName,
//       Email,
//       Password: hashedPass,
//     });

//     const token = tokenGeneration(adminDetails._id);

//     res.json({
//       FirstName: adminDetails.FirstName,
//       SecondName: adminDetails.SecondName,
//       Email: adminDetails.Email,
//       Password: adminDetails.Password,
//       token: token,
//     });
//   } catch (error) {
//     console.error('Create admin error:', error);
//     res.status(500).send('Internal Server Error');
//   }
// };

// const tokenGeneration = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: '1d',
//   });
// };

// module.exports = createAdmin;

