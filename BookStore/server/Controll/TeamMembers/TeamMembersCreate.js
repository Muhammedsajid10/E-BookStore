const teamMemModle = require("./TeamMembersSchema");

const teamMem = async (req,res) => {
    const {Name,Email,Dob,Gender,Description,Role,Mobile,ProfilePicture} = req.body;

    const teamMemExist = await teamMemModle.findOne({Email})
    if(teamMemExist){
        res.json("user already exist..")
    }else{
        const teamMemDetails = await teamMemModle.create({
            Name,Email,Dob,Gender,Description,Role,Mobile,ProfilePicture
        })
        res.json(teamMemDetails) 
    }
   
}

module.exports = teamMem;