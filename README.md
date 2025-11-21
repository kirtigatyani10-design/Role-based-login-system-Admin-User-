# Role-based-login-system-Admin-User-
A role-based React dashboard with user and admin login, sidebar navigation, protected routes, and project/task management pages. Incomplete build uploaded for debugging and continuation.

## 🚀 Tech Stack Used

### **Frontend**
- React JS
- React Router DOM
- Redux Toolkit (Authentication state management)
- Bootstrap & React-Bootstrap (UI components)
- Context API (Theme Switching - Light/Dark Mode)

### **Backend**
- Node.js
- Express.js
- MongoDB + Mongoose (Database)
- JWT (Authentication)
- Bcrypt.js (Password hashing)
- CORS & dotenv

---

## 🔐 Features

### **Authentication**
- Login with JWT token
- Signup for new users
- Password hashing
- LocalStorage token saving

### **Role-Based Access**
- **Admin Panel**
  - Access to Employee page
  - Can Add Employees
  - Can Delete Employees
  - Can Update Employees
  - View Reports
- **User Panel**
  - Can only access User Dashboard
  - Can view personal profile

### **Admin Features**
- Employee Management:
  - Fetch Employees
  - Add New Employee
  - Edit Employee
  - Delete Employee
- Task Management APIs included (Assign, Update, Complete)

### **User Features**
- User Profile (view/update)
- Personal Tasks list

### **Protected Routes**
- Only admin can access:
  - `/employees`
  - `/reports`
- Only logged-in user can access:
  - `/dashboard/admin`
  - `/dashboard/user`

---

## 🛠️ API Endpoints (Complete)

### **Auth Routes**
| Method | Route | Description |
|--------|--------|-------------|
| POST | `/api/auth/signup` | Create new account |
| POST | `/api/auth/login` | Login + JWT token |
| POST | `/api/auth/forgot-password` | Reset password |

---

### **Admin: Employee Routes**
| Method | Route | Description |
|--------|--------|-------------|
| GET | `/api/users/employees` | Get all employees |
| POST | `/api/users/employee` | Add employee |
| DELETE | `/api/users/employee/:id` | Delete employee |
| PUT | `/api/users/employee/:id` | Update employee |

---

### **User Profile Routes**
| Method | Route | Description |
|--------|--------|-------------|
| GET | `/api/users/profile` | View profile |
| PUT | `/api/users/profile` | Update profile |

---

### **Task Routes**
| Method | Route | Description |
|--------|--------|-------------|
| POST | `/api/tasks/assign` | Assign task (Admin only) |
| GET | `/api/tasks/my-tasks` | Get my tasks |
| PUT | `/api/tasks/complete/:id` | Mark complete |
