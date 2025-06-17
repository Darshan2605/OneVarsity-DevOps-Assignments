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

## Local Development Setup

1. Launch EC2 Instance
Use Ubuntu 22.04.
In the security group, allow:
Port 22 (SSH)
Port 80 (HTTP)

2. SSH into Your EC2 Instance

ssh -i "your-key.pem" ubuntu@<your-ec2-public-ip>

3. Install Dependencies
4. 
sudo apt update
sudo apt install nodejs npm nginx

5. Upload Code to EC2
clone with Git and Go to Assignment 2:

# Using Git (on EC2)
git clone [https://github.com/your-username/aws-deployment-project.git](https://github.com/Darshan2605/OneVarsity-DevOps-Assignments.git)

5. Run Backend App

npm install
node app.js   

6. Configure NGINX as a Reverse Proxy
Edit the file /etc/nginx/sites-available/default:

Nginx-

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

Restart NGINX:

sudo nginx -t
sudo systemctl restart nginx

✅ Your app should now be accessible at:
http://<your-ec2-ip> (proxied to your Node.js app on port 3000)

