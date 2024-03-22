// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
const authRoutes = require('./routes/authRoutes');
const artisanRoutes = require('./routes/artisanRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/artisan', artisanRoutes);
app.use('/api/product', productRoutes);
app.use('/api/order', orderRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
Now let's create routes for authentication, artisan profiles, product listings, order management, etc. I'll provide a basic structure for each route, but you'll need to implement the functionality according to your needs.

javascript
Copy code
// authRoutes.js
const express = require('express');
const router = express.Router();

// Authentication endpoints
router.post('/signup', (req, res) => {
  // Implement signup functionality
});

router.post('/login', (req, res) => {
  // Implement login functionality
});

// Logout endpoint
router.get('/logout', (req, res) => {
  // Implement logout functionality
});

module.exports = router;
javascript
Copy code
// artisanRoutes.js
const express = require('express');
const router = express.Router();

// Artisan profile endpoints
router.get('/:id', (req, res) => {
  // Implement get artisan profile functionality
});

router.post('/', (req, res) => {
  // Implement create artisan profile functionality
});

router.put('/:id', (req, res) => {
  // Implement update artisan profile functionality
});

module.exports = router;