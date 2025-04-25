const express = require('express');
const cors = require('cors');
const jobRoutes = require('./routes/jobRoutes');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/jobs', jobRoutes);
app.get('/', (req, res) => {
  res.send('Job Listing API is running...');
});

module.exports = app;
