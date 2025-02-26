# Insurance Policy Management App

## 📌 Project Overview
This project is a full-stack Insurance Policy Management application with a **Django REST Framework (DRF) backend** and a **React frontend**. It allows users to **search, filter, and sort insurance policies** based on different criteria such as **name, policy type, premium range, and coverage amount**.

---
## 🚀 Getting Started

### 🔹 Backend Setup (Django REST Framework)
#### 1️⃣ Install Dependencies
Ensure you have Python installed. Then, set up the virtual environment and install dependencies:
```sh
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
pip install -r requirements.txt
```

#### 2️⃣ Run Migrations
```sh
python manage.py migrate
```

#### 3️⃣ Seed Database (Optional)
You can create some sample policies for testing:
```sh
python manage.py shell
from insurance_api.models import Policy
Policy.objects.create(name='Jeganath', policy_type='Life', premium=12.00, coverage_amount=120000.00)
Policy.objects.create(name='Jeganath K', policy_type='Health', premium=1500.00, coverage_amount=230000.00)
exit()
```

#### 4️⃣ Start the Backend Server
```sh
python manage.py runserver
```
Backend API will be available at: **http://127.0.0.1:8000/api/policies/**

---
### 🔹 Frontend Setup (React)
#### 1️⃣ Install Dependencies
Ensure you have **Node.js** installed. Then, navigate to the frontend folder and install dependencies:
```sh
cd frontend
npm install
```

#### 2️⃣ Start the Frontend Server
```sh
npm start
```
Frontend will be available at: **http://localhost:3000/**

---
## 🏗️ Project Structure
```
InsurancePolicy/
│── Insurance_Policy_Backend/
│   ├── insurance_api/
│   ├── manage.py
│   ├── db.sqlite3
│── Insurance_Policy_Frontend/
│   ├── src/
│   ├── package.json
│── README.md
```

---
## 🔍 Features
✅ **Search by Name**
✅ **Filter by Policy Type, Premium Range, and Coverage Range**
✅ **Sorting by Premium & Coverage**
✅ **Pagination Support**
✅ **Responsive UI**

---
## ⚙️ API Endpoints
| Method | Endpoint            | Description              |
|--------|--------------------|--------------------------|
| GET    | /api/policies/     | List all policies       |
| GET    | /api/policies/?search=John | Search policies by name |
| GET    | /api/policies/?premium__gte=100&premium__lte=1000 | Filter by premium range |

---
## 🎯 Approach & Trade-offs
### Approach:
- **Django REST Framework** was used for quick API development.
- **React** was chosen for a modern, interactive frontend.
- **Filters & Search** were implemented using `django-filters` and `DRF SearchFilter`.

### Trade-offs:
- Used SQLite for simplicity (can be replaced with PostgreSQL in production).
- No authentication implemented as it was not a requirement.

---
## 🤔 Assumptions
1. Users will mostly search and filter based on **premium and coverage amount**.
2. **All policies have a unique name** (not enforced at the database level).
3. Filtering operations are performed server-side for efficiency.

---

## 🛠️ Unit Testing
### Backend Tests (Django)
```sh
python manage.py test
```

### Frontend Tests (React - Jest)
```sh
npm test
```

---
## 🎨 Enhancements
✅ **Pagination** for handling large datasets efficiently.
✅ **Mobile Responsive Design** using CSS Flexbox.
✅ **Sort Policies** by premium & coverage amount.

---
## 💡 Future Improvements
- Implement **user authentication & role-based access**.
- Use **PostgreSQL** instead of SQLite for better scalability.
---

## 🤝 Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a **Pull Request**!

---
## 📄 License
This project is **MIT licensed**.

