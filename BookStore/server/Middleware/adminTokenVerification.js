const jwt = require('jsonwebtoken')
const protect = async (req,res,next) => {
    let token;
    if(req.headers.Authorization && req.headers.Authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decode = jwt.verify(token,process.env.JWT_SECRET)
            res.json({ success: true, decoded });
            next()
        } catch (error) {
            res.status(401).send("NO Token..")
            throw new Error("not auth token")
        }
    }if(!token){
        res.status(401).send("No Token")
        throw new Error("not auth token")
    }
}

module.exports = protect;


// const jwt = require('jsonwebtoken');

// const protect = (req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(' ')[1]; // Extract the token from the Authorization header

//     if (!token) {
//       return res.status(401).json({ error: 'No token provided' });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token using the secret

//     // Add the decoded token payload to the request object for further processing
//     req.user = decoded;

//     next(); // Call the next middleware or route handler
//   } catch (error) {
//     console.error('Token verification error:', error);
//     return res.status(401).json({ error: 'Invalid token' });
//   }
// };

// module.exports = protect;
