# Project Camp Backend

A scalable and secure RESTful API for collaborative project management systems built with Node.js, Express.js, and MongoDB.

Project Camp Backend helps teams manage projects, tasks, subtasks, notes, team members, and authentication with role-based access control.

---

## Features

### Authentication & Authorization

- JWT Authentication
- Refresh Token Mechanism
- Email Verification
- Forgot & Reset Password
- Secure Password Change
- Role-Based Access Control (RBAC)

### Project Management

- Create & Manage Projects
- Project Member Management
- Role Assignment
- Project Details & Analytics

### Task Management

- Create, Update & Delete Tasks
- Assign Tasks to Members
- Task Status Tracking
- Multiple File Attachments
- Subtasks Support

### Notes System

- Create & Manage Project Notes
- Access Control for Notes

### Security

- Protected Routes
- Input Validation
- Secure File Uploads
- CORS Protection

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Multer
- Nodemailer

---

## User Roles

| Role | Permissions |
|------|-------------|
| Admin | Full Project Access |
| Project Admin | Manage Tasks & Project Content |
| Member | View & Update Assigned Work |

---

## Task Status

```txt
todo
in_progress
done
