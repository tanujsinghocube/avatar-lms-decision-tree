import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import avatarRoutes from './routes/avatar';
import trainingRoutes from './routes/training';
import decisionTreeRoutes from './routes/decisionTree';
import assessmentRoutes from './routes/assessments';
import analyticsRoutes from './routes/analytics';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Database connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to the database successfully');
})
.catch((err) => {
    console.error('Database connection error:', err);
});

// Routes setup
app.use('/api/avatar', avatarRoutes);
app.use('/api/training', trainingRoutes);
app.use('/api/decision-tree', decisionTreeRoutes);
app.use('/api/assessments', assessmentRoutes);
app.use('/api/analytics', analyticsRoutes);

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
