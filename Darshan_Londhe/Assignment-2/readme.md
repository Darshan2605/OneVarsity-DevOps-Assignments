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

