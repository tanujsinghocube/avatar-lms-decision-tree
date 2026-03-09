# INSTALLATION GUIDE for Avatar LMS Decision Tree System

## Introduction
This guide provides step-by-step instructions for setting up the Avatar LMS Decision Tree system both locally and on a server.

## Prerequisites
Before you begin, ensure you have the following installed:

- **Node.js** (version X.X.X)
- **npm** (Node Package Manager)
- **Git** (version X.X.X)
- **MongoDB** (if applicable)

## Setting Up Locally

### Step 1: Clone the Repository
Open your terminal and clone the repository to your local machine:

```bash
git clone https://github.com/tanujsinghocube/avatar-lms-decision-tree.git
cd avatar-lms-decision-tree
```

### Step 2: Install Dependencies
Install the required dependencies using npm:

```bash
npm install
```

### Step 3: Configure Environment Variables
Create a `.env` file in the root directory of the project. You can copy the example configuration from `.env.example`:

```bash
cp .env.example .env
```

Edit the `.env` file to set your configuration values.

### Step 4: Start the Local Server
Run the following command to start the local development server:

```bash
npm start
```

Visit `http://localhost:PORT` in your browser to access the application (replace `PORT` with the actual port number).

## Deploying on a Server

### Step 1: Access Your Server
SSH into your server or use any remote desktop tool to access your server environment.

### Step 2: Install Node.js and npm
Follow the instructions for your server's operating system to install Node.js and npm.

### Step 3: Clone the Repository
Clone the repository on your server:

```bash
git clone https://github.com/tanujsinghocube/avatar-lms-decision-tree.git
cd avatar-lms-decision-tree
```

### Step 4: Install Dependencies
Run the following command to install the necessary packages:

```bash
npm install
```

### Step 5: Configure the Environment
Similar to local setup, create a new `.env` file on the server and configure it accordingly.

### Step 6: Start the Application
You can use a process manager like `PM2` or simply run:

```bash
npm start
```

To ensure the application runs continuously, consider using PM2:

```bash
npm install -g pm2
pm2 start npm --name "avatar-lms" -- start
```

### Step 7: Access the Application
You can now access the application via `http://YOUR_SERVER_IP:PORT`, replacing `YOUR_SERVER_IP` and `PORT`.

## Conclusion
Follow these steps to successfully set up and deploy the Avatar LMS Decision Tree system both locally and on your server. If you encounter any issues, please consult the documentation or reach out to the support team.
