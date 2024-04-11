const express = require('express');
const connectToMongo = require('./db');
const cors = require('cors');

const PORT = process.env.REACT_APP_PORT || 8000;

connectToMongo();

const app = express();

app.use(cors());
app.use(express.json({ limit: '100mb' }));

app.use('/api/comment', require("./routes/comment"));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});