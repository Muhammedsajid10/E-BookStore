import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { IoTrashBin, IoEye, IoPencil } from 'react-icons/io5';
import { FcSearch } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import './Book.css';
import Pagination from 'react-bootstrap/Pagination';

const Books = () => {
  // State variables
  const [book, setBooks] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const booksPerPage = 5; // number of books per page.
  const pagesVisited = pageNumber * booksPerPage;
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Fetch data from the server when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Fetch books data from the server
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/books');
      setBooks(response.data);
    } catch (error) {
      console.log('Error fetching books:', error);
    }
  };

  // Delete a book by its ID
  const deleteData = async (bookId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/books/${bookId}`);
      setBooks((prevBook) => prevBook.filter((book) => book._id !== bookId));
      alert('Are you sure to delete this book....');
    } catch (error) {
      console.log('Error deleting book', error);
    }
  };


  const getIdPassBook = (bookId) => {
    navigate(`/selectedBook/${bookId}`);
  };


  const updateTable = (bookId) => {
    navigate(`/update/${bookId}`);
  };

  // Display the list of books with pagination
  const displayBooks = book.slice(pagesVisited, pagesVisited + booksPerPage).map((book, index) => (
    <tr key={book._id}>
      <td>{index + 1}</td>
      <td>{book.Name}</td>
      <td>{book.Author}</td>
      <td>{book.PublicationName}</td>
      <td>{book.Year}</td>
      <td>{book.Prize}</td>
      <td>{book.Availability}</td>
      <td>
        <IoEye className='view-icon' onClick={() => getIdPassBook(book._id)} />
      </td>
      <td>
        <IoPencil className='update-icon' onClick={() => updateTable(book._id)} />
      </td>
      <td>
        <IoTrashBin className='delete-icon' onClick={() => deleteData(book._id)} />
      </td>
    </tr>
  ));

  // Calculate the number of pages needed for pagination
  const pageCount = Math.ceil(book.length / booksPerPage);

  // Function to handle page change when clicking on pagination buttons
  const handlePageChange = (selected) => {
    setPageNumber(selected);
  };

  // Create an array of Pagination.Item elements for the Pagination component
  const paginationItems = [];
  for (let number = 1; number <= pageCount; number++) {
    paginationItems.push(
      <Pagination.Item key={number} active={number === pageNumber} onClick={() => handlePageChange(number - 1)}>
        {number}
      </Pagination.Item>
    );
  }

  // Function to handle search when the search button is clicked
  const handleSearch = () => {
    // Filter books based on the search query
    const filteredBooks = book.filter((book) => {
      return (
        book.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.Author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.PublicationName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.Year.toString().includes(searchQuery)
      );
    });
    // Update the books state with the filtered books and reset the page number
    setBooks(filteredBooks);
    setPageNumber(0);
  };

  return (
    <div className='container-books'>
      {/* Search bar */}
      <div className="search-bar">
        <input type="text" placeholder='Search books...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <button><FcSearch onClick={handleSearch} /></button>
      </div>
      {/* Table to display books */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Book Name</th>
            <th>Author</th>
            <th>Publication Name</th>
            <th>Year</th>
            <th>Prize</th>
            <th>Availability</th>
            <th colSpan={3}>Actions</th>
          </tr>
        </thead>
        <tbody>{displayBooks}</tbody>
      </Table>
      {/* Pagination */}
      <Pagination>{paginationItems}</Pagination>
    </div>
  );
};

export default Books;


