const bookModel = require("./BookSchema");

const createBook = async (req, res) => {
  const { Name, Author, PublicationName, Year, Prize, Availability } = req.body;
  const BookDetails = await bookModel.create({
    Name,
    Author,
    PublicationName,
    Year,
    Prize,
    Availability,
  });
  res.json(BookDetails)
};

module.exports = createBook;
