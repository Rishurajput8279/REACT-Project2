const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoute = require('./routes/userRoutes');
const dbConnect = require('./config/db');

dotenv.config();

const app = express();
const port = process.env.PORT || 4001;

// ✅ Enable CORS for Vite frontend
app.use(cors({
  origin: 'http://localhost:5173', // allow your frontend
  credentials: true                // allow cookies/auth if needed
}));

app.use(express.json());
dbConnect();

app.use('/users', userRoute);

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
