# Avatar LMS Decision Tree

## Project Overview
Avatar LMS Decision Tree is an intelligent decision support system designed to assist learners and educators in navigating the Avatar Learning Management System. Its aim is to provide tailored recommendations based on user inputs, leading to enhanced learning experiences.

## Architecture
The architecture of the Avatar LMS Decision Tree consists of:

1. **Frontend**: 
   - User-friendly interface built with React.js to allow users to interact seamlessly with the decision-making system.

2. **Backend**:
   - A Node.js server that handles requests, processes data, and communicates with the database.
   - Utilizes Express.js for routing and middleware functionality.

3. **Database**:
   - MongoDB for storing user data, decision rules, and recommendations.

4. **Decision Engine**:
   - Implements a decision tree algorithm to analyze user inputs and provide outputs based on predefined rules.

## Features
- Interactive decision-making interface.
- Personalized recommendations based on user profiles.
- Easy integration with the Avatar LMS.
- Ability to view and modify decision rules as an administrator.

## Technology Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Algorithm**: Decision Tree Algorithm

## Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone https://github.com/tanujsinghocube/avatar-lms-decision-tree.git
   cd avatar-lms-decision-tree
   ```

2. **Install dependencies**:
   - For frontend:
   ```bash
   cd frontend
   npm install
   ```
   - For backend:
   ```bash
   cd backend
   npm install
   ```

3. **Set up the database**:
   - Ensure MongoDB is installed and running.
   - Create a database named `avatar_lms`.

4. **Run the application**:
   - Start the backend server:
   ```bash
   cd backend
   npm start
   ```
   - Start the frontend application:
   ```bash
   cd frontend
   npm start
   ```

5. **Access the application**:
   - Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for discussion.

## License
This project is licensed under the MIT License.