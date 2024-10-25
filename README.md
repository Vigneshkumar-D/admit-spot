# Admit Spot

Admit Spot is a Node.js backend application built using Express, providing user authentication, contact management, and other features with JWT-based security and request validation. The application structure follows a modular pattern, making it easy to add features or modify existing ones.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Available Routes](#available-routes)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Vigneshkumar-D/admit-spot.git
    cd admit-spot
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Configure environment variables**: Rename `.env.example` to `.env` and fill in the values as per your setup (see [Environment Variables](#environment-variables)).

4. **Start the server**:
    ```bash
    node src/app.js
    ```
    or for development with auto-reload:
    ```bash
    npm run dev
    ```

## Environment Variables

Create a `.env` file in the root directory to configure the following variables:

- `PORT`: Port number for the server.
- `DB_URI`: Database connection string.
- `JWT_SECRET`: Secret key for JWT signing.
- `RATE_LIMIT_WINDOW`: Time window for rate limiting (in ms).
- `RATE_LIMIT_MAX`: Max number of requests per window.

Example:

```plaintext
DB_NAME=product
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=localhost
DB_PORT=5432
DB_DIALECT=postgres  
JWT_SECRET=qwertyujkjhgfdsdfghj432345678!@#$%^
JWT_EXPIRES_IN=1h
EMAIL_HOST=smtp.gmail.com  
EMAIL_PORT=587            
EMAIL_USER=
EMAIL_PASS=
```

## Usage

To start using the application, access the available routes (detailed below) through a REST client such as Postman or by implementing frontend requests to this API.

## Project Structure

```plaintext
admit-spot/
├── src/
│   ├── app.js                 # Main application file
│   ├── config/                # Configuration files
│   ├── controllers/           # Route controller functions
│   ├── middlewares/           # Middleware functions
│   ├── models/                # Database models
│   ├── routes/                # API routes
│   ├── validations/           # Validation schemas
├── .env.example               # Environment variables example
├── package.json
└── README.md
```

## Available Routes

### Authentication

- **POST /auth/register** - Register a new user
- **POST /auth/login** - Log in a user and receive a JWT token
- **GET /auth/verify-email/:token** - Verify user’s email
- **POST /auth/request-password-reset** - Request a password reset email
- **POST /auth/reset-password/:token** - Reset user password

### Contacts

Protected routes (require authentication token):
- **POST /contacts/** - Create a new contact
- **GET /contacts/** - Retrieve all contacts
- **GET /contacts/:id** - Retrieve a contact by ID
- **PUT /contacts/:id** - Update a contact by ID
- **DELETE /contacts/:id** - Delete a contact by ID
- **POST /contacts/batch** - Batch process contacts

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB (or other DB based on DB_URI)**
- **JWT** - JSON Web Tokens for authentication
- **Joi** - Data validation
- **Rate Limiting** - Middleware for request rate limiting
- **dotenv** - For environment variable management

## Contributing

Contributions are welcome! Please fork this repository, make your changes, and submit a pull request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add your message'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

--- 

Feel free to adjust or expand upon this template based on your project's specific details!
