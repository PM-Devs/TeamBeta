const express = require('express');
const connectDB = require('./config/db'); // Import your db connection
const userRoutes = require('./routes/userRoutes');
const teamRoutes = require('./routes/teamRoutes');
const teamMemberRoutes = require('./routes/teamMemberRoutes');
const chatRoutes = require('./routes/chatRoutes');
const fileRoutes = require('./routes/fileRoutes');
const fileVersionRoutes = require('./routes/fileVersionRoutes');
const taskRoutes = require('./routes/taskRoutes.js');
const errorMiddleware = require('./middelware/errorMiddleware.js');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use(userRoutes);
app.use(teamRoutes);
app.use(teamMemberRoutes);
app.use(chatRoutes);
app.use(fileRoutes);
app.use(fileVersionRoutes);
app.use(taskRoutes);

// Error handling middleware
app.use(errorMiddleware);

// Connect to MongoDB and start server
connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error.message);
    });
