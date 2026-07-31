# Mini CRM System - Client

A modern Customer Relationship Management (CRM) web application built with **Next.js**, **TypeScript**, and **Tailwind CSS**. This frontend provides an intuitive dashboard for administrators and staff to manage customers, leads, and tasks efficiently.

---

## 🚀 Live Demo

**Client:** https://your-client-url.vercel.app

**Server:** https://your-server-url.vercel.app

---

## ✨ Features

### Authentication
- User Login
- JWT Authentication
- Protected Routes
- Role-Based Access (Admin & Staff)

### Dashboard
- Beautiful Dashboard UI
- Responsive Design
- Sidebar Navigation
- Profile Management

### Task Management
- Create Task
- Edit Task
- Delete Task
- View All Tasks
- Search Tasks
- Assign Tasks to Staff
- Task Status Tracking
- Priority Management

### Lead Management
- View Leads
- Manage Assigned Leads
- Lead Status

### Customer Management
- View Customers
- Customer Details
- Customer Status

### Staff Features
- View Assigned Tasks
- Update Task Status
- View Assigned Leads

### UI
- Responsive Layout
- Modern Cards
- Beautiful Tables
- Modal Components
- Loading States
- Error Handling

---

# Tech Stack

- Next.js 16
- TypeScript
- React
- Tailwind CSS
- Axios
- React Hook Form
- Zod
- React Hot Toast
- Lucide React

---

# Folder Structure

```
src
│
├── app
│   ├── dashboard
│   ├── login
│   └── register
│
├── components
│   ├── dashboard
│   ├── shared
│   ├── ui
│   └── forms
│
├── hooks
│
├── services
│
├── types
│
├── lib
│
└── middleware.ts
```

---

# Installation

Clone the repository

```bash
git clone https://github.com/your-username/mini-crm-client.git
```

Go to project

```bash
cd client
```

Install packages

```bash
npm install
```

---

# Environment Variables

Create a `.env.local` file.

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

For production

```env
NEXT_PUBLIC_API_URL=https://your-server.vercel.app/api
```

---

# Run Development Server

```bash
npm run dev
```

Application will run on

```
http://localhost:3000
```

---

# Build Project

```bash
npm run build
```

---

# Start Production

```bash
npm start
```

---

# Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

---

# Pages

- Login
- Dashboard
- Customers
- Leads
- Tasks
- Profile

---

# User Roles

## Admin

- Manage Staff
- Manage Customers
- Manage Leads
- Create Tasks
- Assign Tasks
- Update Tasks
- Delete Tasks
- Dashboard Analytics

## Staff

- View Assigned Tasks
- Update Task Status
- View Assigned Leads
- Manage Customers

---

# API Integration

The frontend communicates with the Express.js backend using Axios.

Example

```ts
GET /api/tasks
POST /api/tasks
PATCH /api/tasks/:id
DELETE /api/tasks/:id
```

---

# Deployment

## Deploy to Vercel

Install Vercel

```bash
npm install -g vercel
```

Deploy

```bash
vercel
```

Production

```bash
vercel --prod
```

---

# Future Improvements

- Notifications
- Dark Mode
- Charts & Analytics
- Email Integration
- Activity Logs
- File Upload
- Calendar
- Advanced Search
- Pagination
- Filters

---

# Author

**Diponkor Roy**

GitHub:
https://github.com/diponkorroy064-max

LinkedIn:
https://linkedin.com/in/your-linkedin

---
