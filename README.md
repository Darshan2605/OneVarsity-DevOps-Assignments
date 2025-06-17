# 🚀 OneVarsity-DevOps-Assignments

This repository contains assignments completed by Darshan Londhe for the DevOps Internship at OneVarsity.

## 📋 Assignments Overview

### Assignment 1: Dockerize a MERN App
**Objective**: Containerize a full-stack application using Docker and Docker Compose.

#### ✅ Tasks Completed
- Created Dockerfile for React client
- Created Dockerfile for Node.js server
- Configured Docker Compose for multi-container setup
- Set up MongoDB container with persistent storage
- Implemented container networking
- Added environment variables for secure configuration

#### 🏗️ Project Structure
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

#### 🚀 Quick Start
1. Clone the repository
2. Navigate to Assignment-1 directory
3. Run `docker compose up --build`
4. Access:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - MongoDB: mongodb://localhost:27017

### Assignment 2: AWS Deployment
**Objective**: Deploy a full-stack web application to AWS EC2, configure NGINX as a reverse proxy, and optionally map a domain name.

#### ✅ Tasks Completed
- Deployed application on AWS EC2 (Ubuntu)
- Installed and configured NGINX as a reverse proxy
- Set up proper security groups and port configurations
- Configured Node.js environment on EC2
- Implemented proper networking and routing

#### ⚙️ EC2 Configuration
| Property            | Details                       |
|---------------------|-------------------------------|
| Instance Type       | t2.micro (Free Tier)          |
| OS                  | Ubuntu 24.04 LTS              |
| Application Port    | 3000                          |
| NGINX Proxy Port    | 80 (HTTP)                     |
| Security Groups     | Allowed ports: SSH(22), 80    |
| Node.js Installed   | Yes                           |
| NGINX Installed     | Yes                           |

#### 🚀 Deployment Steps
1. Launch EC2 Instance (Ubuntu 22.04)
2. Configure Security Groups
3. Connect to EC2 Instance
4. Install Dependencies
5. Clone and Setup Project
6. Configure NGINX as Reverse Proxy
7. Start Application

## 🛠️ Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Containerization**: Docker, Docker Compose
- **Cloud**: AWS EC2
- **Web Server**: NGINX
- **Version Control**: Git, GitHub

## 📦 Prerequisites
- Docker Desktop
- Node.js and npm
- Git
- AWS Account (for Assignment 2)
- SSH Client

## 🔧 Development Setup
1. Clone the repository:
```bash
git clone https://github.com/Darshan2605/OneVarsity-DevOps-Assignments.git
```

2. For Assignment 1 (Docker):
```bash
cd Assignment-1
docker compose up --build
```

3. For Assignment 2 (AWS):
```bash
cd Assignment-2
# Follow the deployment steps in the assignment directory
```

## 📝 Notes
- Assignment 1 focuses on containerization and local development
- Assignment 2 demonstrates cloud deployment and production setup
- Both assignments showcase different aspects of DevOps practices

## 🔐 Security Considerations
- Environment variables are properly configured
- MongoDB authentication is implemented
- AWS security groups are properly configured
- NGINX is configured with security headers
- Docker containers are properly isolated

## 📚 Learning Outcomes
- Containerization with Docker
- Multi-container orchestration
- Cloud deployment on AWS
- Reverse proxy configuration
- Security best practices
- DevOps workflow implementation
