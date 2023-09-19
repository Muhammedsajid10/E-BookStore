const bookModel = require("./BookSchema")

const bookGetUpdDlt = async(req,res) => {
    const getId = req.params.id
   
    // const book = await bookModel.find()
  
    if(req.method === 'GET'){
        try{
            // const book = await bookModel.findById(getId)
            const book = await bookModel.find()
            res.json(book)
        }catch(error){
            res.json(`the get error iss ${error}`);
        }
    }else if(req.method === 'PUT'){
        const { Name, Author, PublicationName, Year, Prize, Availability } = req.body;
        try {
            const bookUpdate = await bookModel.findByIdAndUpdate(getId,{Name, Author, PublicationName, Year, Prize, Availability }, { new: true })
            res.json(bookUpdate)
        } catch (error) {
            res.json(`the update error iss ${error}`);
        }
    }else if (req.method === 'DELETE') {
        try {
            const bookDlt = await bookModel.findByIdAndDelete(getId);
            res.json({ message: 'Book deleted successfully' });
        } catch (error) {
            res.json(`the delete error is ${error}`);
        }
    }
}

const getIdPassBook = async(req,res) => {
    const idPass = req.params.id 
    const getIdPass = await bookModel.findById({_id:idPass})
    res.json(getIdPass)
}



module.exports = {bookGetUpdDlt,getIdPassBook}