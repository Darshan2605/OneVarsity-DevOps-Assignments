# 🚀 Assignment 2: AWS Deployment

## 📌 Objective
Deploy a full-stack web application to AWS EC2, configure NGINX as a reverse proxy, and optionally map a domain name.

---

## ✅ Tasks Completed

- ✅ Deployed application on AWS EC2 (Ubuntu)
- ✅ Installed and configured **NGINX** as a reverse proxy
  
---

## 📷 Screenshots

| App Running on EC2                                                                                     | NGINX Reverse Proxy Setup                                                                             |
|-------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| ![Screenshot 2025-06-16 232053](https://github.com/user-attachments/assets/e1072e4a-5f7d-487a-9a54-3c3feca083a1) | ![Screenshot 2025-06-16 231536](https://github.com/user-attachments/assets/25dfd929-331c-4385-aced-4de54032e160) |

---

## ⚙️ EC2 Configuration Summary

| Property            | Details                       |
|---------------------|-------------------------------|
| Instance Type       | t2.micro (Free Tier)          |
| OS                  | Ubuntu 24.04 LTS              |
| Application Port    | 3000                          |
| NGINX Proxy Port    | 80 (HTTP)                     |
| Security Groups     | Allowed ports: SSH(22), 80    |
| Node.js Installed   | Yes                           |
| NGINX Installed     | Yes                           |


---

## 🚀 Local Development Setup

### 1. Launch EC2 Instance
- Use Ubuntu 22.04
- Configure Security Group:
  - Allow Port 22 (SSH)
  - Allow Port 80 (HTTP)

### 2. Connect to EC2 Instance
```bash
ssh -i "your-key.pem" ubuntu@<your-ec2-public-ip>
```

### 3. Install Required Dependencies
```bash
sudo apt update
sudo apt install nodejs npm nginx
```

### 4. Clone and Setup Project
```bash
# Clone the repository
git clone https://github.com/Darshan2605/OneVarsity-DevOps-Assignments.git

# Navigate to project directory
cd OneVarsity-DevOps-Assignments/Assignment-2
```

### 5. Run Backend Application
```bash
# Install dependencies
npm install

# Start the application
node app.js
```

### 6. Configure NGINX as Reverse Proxy
1. Edit NGINX configuration:
```bash
sudo nano /etc/nginx/sites-available/default
```

2. Add the following configuration:
```nginx
server {
    listen 80;
    server_name <your-ec2-ip> or yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

3. Test and restart NGINX:
```bash
# Test configuration
sudo nginx -t

# Restart NGINX
sudo systemctl restart nginx
```

### 7. Access Your Application
Your application should now be accessible at:
```
http://<your-ec2-ip>
```
(Proxied to your Node.js app running on port 3000)

