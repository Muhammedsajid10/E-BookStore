const userModel = require("./userSchema");

const userGtPtDt = async (req, res) => {
  const getId = req.params.id;

  if (req.method === 'GET') {
    try {
      const getUser = await userModel.find();
      if (!getUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(getUser);
    } catch (error) {
      console.error('Error on getting user:', error);
      res.status(500).json({ message: 'An error occurred while fetching user' });
    }
  }

  else if(req.method === 'PUT'){
    const {Name,Email,Password} = req.body
    try {
        const userUpdt = await userModel.findByIdAndUpdate(getId,{Name,Email,Password})
        if(!userUpdt){
            return res.status(404).json({message:'User not found '})
        }
        res.json(userUpdt)
    } catch (error) {
        res.status(500).json({message:'An error occured while updating User'})
    }
  }

  else if(req.method === 'DELETE'){
    try {
        const userDtl = await userModel.findByIdAndDelete(getId)
        if(!userDtl){
            return res.status(404).json({message:'User not found'})
        }
        res.json(userDtl)
    } catch (error) {
        res.status(500).json({message:'An error occured while deleting User',error})
    }
  }
};


const idPassUser = async (req,res) => {
    const getId = req.params.id
    try {
        const getUser = await userModel.findById({ _id: getId });
        if (!getUser) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(getUser);
      } catch (error) {
        console.error('Error on getting user:', error);
        res.status(500).json({ message: 'An error occurred while fetching user' });
      }
}

module.exports = {userGtPtDt,idPassUser};
