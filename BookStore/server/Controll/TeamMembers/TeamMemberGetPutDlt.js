const teamMemModle = require("./TeamMembersSchema")

const teamGetPutDlt = async (req,res) => {
    const getId = req.params.id

    if(req.method === 'GET'){
        try {
            const getTeam = await teamMemModle.find()
            res.json(getTeam)
        } catch (error) {
            res.json(`The get error is : ${error}`)
        }
    }

    else if(req.method === 'PUT'){
        const {Name,Email,Dob,Gender,Description,Role,Mobile,ProfilePicture} = req.body
        try {
            const updateTeam = await teamMemModle.findByIdAndUpdate(getId,{Name,Email,Dob,Gender,Description,Role,Mobile,ProfilePicture})
            res.json({sajid:'successfully updated the team member',data:updateTeam})
        } catch (error) {
            console.log(`The update error is : ${error}`);
        }
    }

    else if(req.method === "DELETE"){
        try {
            const dltBook = await teamMemModle.findByIdAndDelete(getId)
            res.json({message:'Successfully deleted team Membet',data:dltBook})
        } catch (error) {
            console.log(`The delete error is : ${error}`);
        }
    }
    
}


const idPassTeamMem = async (req,res) => {
    const idPass = req.params.id
    const getId = await teamMemModle.findById({_id:idPass})
    res.json(getId)
}


module.exports = {teamGetPutDlt,idPassTeamMem}