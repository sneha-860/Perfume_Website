# Lumière Perfume Shop

A sophisticated e-commerce platform for luxury perfumes, built with React and Node.js. Features a modern UI with seamless shopping experience, product reviews, wishlist functionality, and responsive design.

## Features

### Frontend Features
- **Responsive Design**: Mobile-first approach with elegant layouts
- **Product Catalog**: Grid view with filtering and search capabilities
- **Product Details**: High-quality image galleries with zoom functionality
- **Shopping Cart**: Real-time cart management with localStorage persistence
- **Wishlist**: Save favorite products for later
- **Product Reviews**: User-generated reviews with star ratings
- **Search & Filter**: Advanced product discovery
- **Smooth Navigation**: Single-page application with React Router
- **Toast Notifications**: User feedback for all actions
- **Loading States**: Skeleton loaders for better UX

### Backend Features
- **RESTful API**: Express.js with proper HTTP status codes
- **Database**: MongoDB with Mongoose ODM
- **Product Management**: CRUD operations for products
- **Review System**: User reviews with rating calculations
- **Data Seeding**: Pre-populated database with sample products
- **Error Handling**: Comprehensive error responses
- **CORS Support**: Cross-origin resource sharing configured
- **Health Checks**: API endpoint monitoring

## Technology Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests
- **CSS3** - Custom CSS with CSS variables
- **Google Fonts** - Playfair Display & Inter typography

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## Project Structure

```
/perfume-shop
  /client
    /src
      /components        # Reusable React components
        Navbar.jsx
        Footer.jsx
        ProductCard.jsx
        ImageGallery.jsx
        ProductInfo.jsx
        StarRating.jsx
        Toast.jsx
        LoadingSpinner.jsx
        SkeletonCard.jsx
      /pages            # Page components
        HomePage.jsx
        ProductPage.jsx
        AboutPage.jsx
        ContactPage.jsx
      /hooks            # Custom React hooks
        useCart.js
        useWishlist.js
        useApi.js
      /constants        # Application constants
        index.js
      App.jsx           # Main App component
      main.jsx          # Entry point
      index.css         # Global styles
    package.json
    .env.example
  /server
    /config
      db.js            # Database configuration
    /models
      Product.js       # Product schema
      Review.js        # Review schema
    /routes
      products.js      # Product routes
    server.js          # Server entry point
    seed.js            # Database seeding
    .env.example
    package.json
  README.md
  .gitignore
```

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Backend Setup

1. Navigate to server directory:
```bash
cd /server
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Update `.env` with your configuration:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/perfume_shop
CLIENT_URL=http://localhost:3000
```

5. Seed the database:
```bash
npm run seed
```

6. Start development server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to client directory:
```bash
cd /client
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file (if needed):
```bash
cp .env.example .env
```

4. Start development server:
```bash
npm start
```

## Available Scripts

### Backend Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run seed` - Seed database with sample data

### Frontend Scripts
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests (if configured)

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `GET /api/products/:id/reviews` - Get product reviews
- `POST /api/products/:id/reviews` - Add product review

### Health Check
- `GET /api/health` - Server health status

## Data Models

### Product Schema
```javascript
{
  name: String (required),
  brand: String (required),
  tagline: String,
  description: String,
  price: Number (required),
  sizes: [{ size: String, price: Number }],
  images: [String],
  category: String,
  badge: String,
  rating: Number,
  reviewCount: Number
}
```

### Review Schema
```javascript
{
  productId: ObjectId (ref: Product),
  author: String (required),
  rating: Number (1-5, required),
  title: String (required),
  body: String (required)
}
```

## Features in Detail

### Shopping Cart
- Add products with size selection
- Update quantities
- Remove items
- Persistent storage in localStorage
- Real-time cart count updates

### Wishlist
- Add/remove products from wishlist
- Persistent storage
- Visual feedback for wishlisted items

### Product Reviews
- 5-star rating system
- Review title and content
- Automatic rating calculations
- Sorted by most recent

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interactions
- Smooth animations and transitions

## Environment Variables

### Backend (.env)
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/perfume_shop
CLIENT_URL=http://localhost:3000
NODE_ENV=development
```

### Frontend (.env)
```env
REACT_APP_API_URL=http://localhost:5000
```

## Deployment

### Production Build

1. Build frontend:
```bash
cd /client
npm run build
```

2. Configure production environment variables

3. Start backend server:
```bash
cd /server
npm start
```

### Environment Considerations
- Frontend build files can be served statically
- Backend serves API and static files
- MongoDB connection string must be updated for production
- CORS origins must be configured for production domains

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Code Quality

This project follows professional development practices:
- JSDoc documentation
- PropTypes validation
- Custom hooks for state management
- Consistent error handling
- Clean code architecture
- Environment variable management
- Git version control best practices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for educational and demonstration purposes.

## Support

For questions or support, please refer to the project documentation or create an issue in the repository.

---

**Lumière Perfume Shop** - Where luxury meets technology in perfect harmony.
