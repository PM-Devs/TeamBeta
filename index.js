const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const errorMiddleware = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

// Middleware
app.use(express.json());
// CORS middleware
app.use(cors());

// Routes
const userRoutes = require('./routes/userRoutes');
const teamRoutes = require('./routes/teamRoutes');
const teamMemberRoutes = require('./routes/teamMemberRoutes');
const chatRoutes = require('./routes/chatRoutes');
const fileRoutes = require('./routes/fileRoutes');
const fileVersionRoutes = require('./routes/fileVersionRoutes');
const taskRoutes = require('./routes/taskRoutes');
const summarizeAndImproveRoutes = require('./routes/summarizeAndImproveRoutes');

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/team-members', teamMemberRoutes);
app.use('/api/chats', chatRoutes);
app.use('/api/files', fileRoutes);
app.use('/api/file-versions', fileVersionRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/summarize', summarizeAndImproveRoutes);

// Error handling middleware
app.use(errorMiddleware);

connectDB()
  .then(() => {
    // Start the server once MongoDB is connected
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error.message);
  });