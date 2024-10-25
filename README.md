# Personal Expense Tracker

Personal Expense Tracker is a financial management application that allows users to track transactions, categorize them, and generate summaries of their financial activities. This project is built with Node.js, Express, and PostgreSQL.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [API Endpoints](#api-endpoints)
  - [Categories](#categories)
  - [Transactions](#transactions)
  - [Summary](#summary)
- [Sample Responses](#sample-responses)
- [License](#license)

## Features

- Add, update, delete, and retrieve categories and transactions.
- Categorize transactions as income or expense.
- Retrieve a summary of transactions, including total income, total expenses, and balance.
- Filter summaries by date range or category.

## Technologies

- Node.js
- Express
- PostgreSQL
- Sequelize ORM
- Swagger (for API documentation)

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/floww.ai.git
   ```

2. Navigate into the project directory:
   ```bash
   cd floww.ai
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and configure your database connection:
   ```
   DB_HOST=localhost
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_NAME=floww_ai
   ```

5. Run the application:
   ```bash
   npm start
   ```

6. Access the API documentation through Swagger UI at `http://localhost:3000/api-docs`.

## API Endpoints

### Categories

#### 1. Create a Category
- **Endpoint**: `POST /api/categories`
- **Description**: Add a new category.
- **Request Body**:
  ```json
  {
    "name": "Groceries",
    "type": "expense"
  }
  ```

#### 2. Get All Categories
- **Endpoint**: `GET /api/categories`
- **Description**: Retrieve all categories.

#### 3. Get Category by ID
- **Endpoint**: `GET /api/categories/:id`
- **Description**: Retrieve a category by its ID.

#### 4. Update a Category
- **Endpoint**: `PUT /api/categories/:id`
- **Description**: Update an existing category.
- **Request Body**:
  ```json
  {
    "name": "Food & Beverages",
    "type": "expense"
  }
  ```

#### 5. Delete a Category
- **Endpoint**: `DELETE /api/categories/:id`
- **Description**: Delete a category by its ID.

### Transactions

#### 1. Create a Transaction
- **Endpoint**: `POST /api/transactions`
- **Description**: Add a new transaction.
- **Request Body**:
  ```json
  {
    "type": "income",
    "categoryId": 1,
    "amount": 100.00,
    "date": "2023-10-22T10:00:00Z",
    "description": "Freelance work"
  }
  ```

#### 2. Get All Transactions
- **Endpoint**: `GET /api/transactions`
- **Description**: Retrieve all transactions.

#### 3. Get Transaction by ID
- **Endpoint**: `GET /api/transactions/:id`
- **Description**: Retrieve a transaction by its ID.

#### 4. Update a Transaction
- **Endpoint**: `PUT /api/transactions/:id`
- **Description**: Update an existing transaction.
- **Request Body**:
  ```json
  {
    "type": "expense",
    "categoryId": 2,
    "amount": 50.00,
    "date": "2023-10-20T10:00:00Z",
    "description": "Grocery shopping"
  }
  ```

#### 5. Delete a Transaction
- **Endpoint**: `DELETE /api/transactions/:id`
- **Description**: Delete a transaction by its ID.

### Summary

#### Get Summary of Transactions
- **Endpoint**: `GET /api/summary`
- **Description**: Retrieve a summary of transactions, such as total income, total expenses, and balance. Optionally, this can be filtered by date range or category.

## Sample Responses

### Create a Category
- **Response**:
  ```json
  {
    "id": 1,
    "name": "Groceries",
    "type": "expense",
    "createdAt": "2023-10-22T10:00:00Z",
    "updatedAt": "2023-10-22T10:00:00Z"
  }
  ```

### Get All Categories
- **Response**:
  ```json
  [
    {
      "id": 1,
      "name": "Groceries",
      "type": "expense",
      "createdAt": "2023-10-22T10:00:00Z",
      "updatedAt": "2023-10-22T10:00:00Z"
    },
    {
      "id": 2,
      "name": "Salary",
      "type": "income",
      "createdAt": "2023-10-22T10:00:00Z",
      "updatedAt": "2023-10-22T10:00:00Z"
    }
  ]
  ```

### Get All Transactions
- **Response**:
  ```json
  [
    {
      "id": 1,
      "type": "income",
      "categoryId": 1,
      "amount": 100.00,
      "date": "2023-10-22T10:00:00Z",
      "description": "Freelance work",
      "createdAt": "2023-10-22T10:00:00Z",
      "updatedAt": "2023-10-22T10:00:00Z"
    },
    {
      "id": 2,
      "type": "expense",
      "categoryId": 2,
      "amount": 50.00,
      "date": "2023-10-20T10:00:00Z",
      "description": "Grocery shopping",
      "createdAt": "2023-10-20T10:00:00Z",
      "updatedAt": "2023-10-20T10:00:00Z"
    }
  ]
  ```

### Summary Response
- **Response**:
  ```json
  {
    "totalIncome": 100.00,
    "totalExpenses": 50.00,
    "balance": 50.00
  }
  ```

  ### API Screenshot
  ![alt text](<Screenshot (60).png>)

