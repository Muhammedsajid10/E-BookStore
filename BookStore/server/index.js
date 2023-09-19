const express = require('express');
const connection = require('./Mongodb/config');
const router = require('./Router/Router');
const dotenv = require('dotenv');
const cors = require('cors')

dotenv.config(); // Load environment variables from .env file

const app = express();
connection();

const corsOptions = {
  origin: '*', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));  // to connect front and back end


// app.use(cors())
app.use(express.json());
app.use('/', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

