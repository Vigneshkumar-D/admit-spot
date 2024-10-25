const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const authRoutes = require('./routes/authRoutes');
const contactRoutes = require('./routes/contactRoutes');
const fileRoutes = require('./routes/fileRoutes');
const { rateLimiter } = require('./middlewares/rateLimit');

const app = express();
const PORT = process.env.PORT || 5000;

const pool = new Pool({
    user: process.env.DB_USER,          
    host: process.env.DB_HOST,          
    database: process.env.DB_NAME,      
    password: process.env.DB_PASSWORD,  
    port: process.env.DB_PORT || 5432,  
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(rateLimiter); 


pool.connect()
    .then(client => {
        console.log('PostgreSQL connected...');
        client.release();
    })
    .catch(err => console.error('PostgreSQL connection error:', err));


app.use('/api/auth', authRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/files', fileRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Contact Management API');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
