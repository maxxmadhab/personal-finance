# personal-finance
Personal Finance Visualizer A simple web application for tracking personal finances.



# MaxxFinance - Personal Finance Tracker

## 📌 Project Overview
MaxxFinanceReal is a personal finance tracking application designed to help users efficiently manage their transactions. It allows users to **add, edit, and delete transactions**, view their **monthly expense trends through bar charts**, and provides an intuitive interface for better financial management.

## 🎯 Features
- **Transaction Management:** Add, edit, and delete transactions (amount, date, description).
- **Transaction List View:** Displays all transactions in a structured format.
- **Monthly Expenses Chart:** Visual representation of monthly spending trends.
- **Basic Form Validation:** Ensures all fields are filled before submission.
- **Navigation & Layout:** Simple and professional **Navbar & Footer** for seamless navigation.

## 🛠️ Tech Stack
- **Frontend:** React.js, Vite
- **State Management:** useState (React Hooks)
- **Charting Library:** Recharts
- **Styling:** CSS (no Tailwind)
- **Routing:** React Router (for future additional pages)

## 📂 Project Structure
```
MaxxFinanceReal/
│── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── TransactionForm.jsx
│   │   ├── TransactionList.jsx
│   │   ├── Chart.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│── public/
│── package.json
│── README.md
```

## 🚀 Installation & Setup
### **Prerequisites:**
Ensure you have the following installed:
- Node.js (v14+ recommended)
- npm or yarn

### **Steps to Run the Project:**
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/your-username/MaxxFinanceReal.git
   cd MaxxFinanceReal
   ```
2. **Install Dependencies:**
   ```sh
   npm install
   ```
3. **Start the Development Server:**
   ```sh
   npm run dev
   ```
4. Open your browser and navigate to:
   ```sh
   http://localhost:5173/
   ```

## 📌 Usage Guide
1. **Adding a Transaction:** Fill in the amount, date, and description in the form and click **"Add Transaction"**.
2. **Viewing Transactions:** All transactions appear in a list below the form.
3. **Deleting Transactions:** Click the **"Delete"** button next to a transaction to remove it.
4. **Viewing Monthly Expenses:** The bar chart dynamically updates based on the transactions entered.

## 📝 Future Enhancements
- User authentication for personal accounts
- Export transactions to CSV
- Dark mode theme support
- Category-based expense tracking

## 🏆 Contributors
- **Madhab Padhi** - Developer

## 📜 License
This project is **for educational purposes** and not intended for commercial use.



