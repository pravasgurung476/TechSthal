const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// ✅ Add this line before routes
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(express.json()); // body parser

// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});
