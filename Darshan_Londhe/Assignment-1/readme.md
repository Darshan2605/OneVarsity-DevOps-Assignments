# 🐳 Assignment 1: Dockerize a MERN App

## 📌 Objective
Containerize a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application using Docker and Docker Compose.

## ✅ Tasks Completed
- ✅ Created Dockerfile for React client
- ✅ Created Dockerfile for Node.js server
- ✅ Configured Docker Compose for multi-container setup
- ✅ Set up MongoDB container with persistent storage
- ✅ Implemented container networking
- ✅ Added environment variables for secure configuration

## 🏗️ Project Structure
```
Assignment-1/
├── client/                 # React frontend
│   ├── src/               # Source files
│   ├── public/            # Static files
│   ├── package.json       # Frontend dependencies
│   └── Dockerfile         # Frontend container config
├── server/                # Node.js backend
│   ├── models/           # Database models
│   ├── package.json      # Backend dependencies
│   └── Dockerfile        # Backend container config
└── docker-compose.yml    # Multi-container orchestration
```

## 🚀 Quick Start

### Prerequisites
- Docker Desktop installed and running
- Git installed
- Node.js and npm (for local development)

### Running with Docker Compose
1. Clone the repository:
```bash
git clone https://github.com/Darshan2605/OneVarsity-DevOps-Assignments.git
cd OneVarsity-DevOps-Assignments/Darshan_Londhe/Assignment-1
```

2. Build and start the containers:
```bash
docker compose up --build
```

3. Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- MongoDB: mongodb://localhost:27017
![Screenshot 2025-06-17 190851](https://github.com/user-attachments/assets/5626676b-460f-4434-9983-791ef9981c7f)

## 💻 Local Development Setup

### Frontend (React)
1. Navigate to client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm start
```

### Backend (Node.js)
1. Navigate to server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm start
```

## 🔧 Docker Configuration Details

### Client Dockerfile
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 80
CMD ["npm", "start"]
```

### Server Dockerfile
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
```

### Docker Compose Services
- **MongoDB**: Database service with persistent volume
- **Server**: Node.js backend API
- **Client**: React frontend application
![Screenshot 2025-06-17 191038](https://github.com/user-attachments/assets/e005c906-1399-4f2f-8eb1-461d10e60cbd)
![Screenshot 2025-06-17 190916](https://github.com/user-attachments/assets/3c26d20e-5fc1-4744-b960-f28c348c3a1d)
![Screenshot 2025-06-17 190945](https://github.com/user-attachments/assets/6ae2ce5b-0a1f-499d-9de7-172ea420a8c5)
![Screenshot 2025-06-17 191156](https://github.com/user-attachments/assets/2bcc8a6d-a0f8-465a-aed5-096fddcadcac)

## 🔐 Environment Variables
The following environment variables are configured in docker-compose.yml:
- `MONGO_INITDB_ROOT_USERNAME`: MongoDB root username
- `MONGO_INITDB_ROOT_PASSWORD`: MongoDB root password
- `MONGO_URL`: MongoDB connection string
- `NODE_ENV`: Node.js environment

## 📦 Container Ports
- Frontend: 3000
- Backend: 5000
- MongoDB: 27017

## 🛠️ Development Commands

### Docker Commands
```bash
# Build containers
docker compose build

# Start containers
docker compose up

# Stop containers
docker compose down

# View logs
docker compose logs

# Remove volumes
docker compose down -v
```

## 📝 Notes
- The application uses Docker volumes for MongoDB data persistence
- Container networking is configured for secure inter-service communication

