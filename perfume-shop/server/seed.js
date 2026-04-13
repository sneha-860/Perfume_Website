const mongoose = require('mongoose');
require('dotenv').config();
const Product = require('./models/Product');
const Review = require('./models/Review');

const products = [
  {
    name: "Noir Absolu",
    brand: "Maison Élite",
    tagline: "Dark. Mysterious. Unforgettable.",
    description: "A rich oriental fragrance with deep notes of oud, black amber, and midnight rose. Perfect for evenings that demand presence and power.",
    price: 2999,
    sizes: [{ size: "30ml", price: 1999 }, { size: "50ml", price: 2999 }, { size: "100ml", price: 4999 }],
    category: "Oriental",
    badge: "Bestseller",
    rating: 4.7,
    reviewCount: 3,
    images: ["https://placehold.co/600x600/c9a84c/0a0a0a?text=Noir+Absolu"]
  },
  {
    name: "Blanc de Soie",
    brand: "Lumière Paris",
    tagline: "Soft. Powdery. Eternally elegant.",
    description: "A delicate floral with notes of white peony, iris, and warm sandalwood. The scent of quiet luxury.",
    price: 3499,
    sizes: [{ size: "30ml", price: 2499 }, { size: "50ml", price: 3499 }, { size: "100ml", price: 5999 }],
    category: "Floral",
    badge: "New",
    rating: 4.5,
    reviewCount: 3,
    images: ["https://placehold.co/600x600/c9a84c/0a0a0a?text=Blanc+de+Soie"]
  },
  {
    name: "Ambre Soleil",
    brand: "Désert Luxe",
    tagline: "Warm. Golden. Sun-drenched.",
    description: "An amber-forward fragrance layered with vanilla, cedarwood, and a hint of spiced saffron. A scent that lingers like a golden sunset.",
    price: 2499,
    sizes: [{ size: "30ml", price: 1499 }, { size: "50ml", price: 2499 }, { size: "100ml", price: 3999 }],
    category: "Amber",
    badge: "Limited",
    rating: 4.8,
    reviewCount: 3,
    images: ["https://placehold.co/600x600/c9a84c/0a0a0a?text=Ambre+Soleil"]
  },
  {
    name: "Vert Sauvage",
    brand: "Forêt Noire",
    tagline: "Fresh. Wild. Untamed.",
    description: "A green aromatic with notes of bergamot, crushed fig leaves, vetiver, and damp earth. For those who wear nature.",
    price: 1999,
    sizes: [{ size: "30ml", price: 1299 }, { size: "50ml", price: 1999 }, { size: "100ml", price: 3499 }],
    category: "Fresh",
    badge: "",
    rating: 4.3,
    reviewCount: 3,
    images: ["https://placehold.co/600x600/c9a84c/0a0a0a?text=Vert+Sauvage"]
  },
  {
    name: "Rose Eternelle",
    brand: "Maison Élite",
    tagline: "Bold. Romantic. Timeless.",
    description: "A modern rose fragrance enriched with oud, musk, and a whisper of patchouli. Not your grandmother's rose.",
    price: 3999,
    sizes: [{ size: "30ml", price: 2799 }, { size: "50ml", price: 3999 }, { size: "100ml", price: 6499 }],
    category: "Floral",
    badge: "Bestseller",
    rating: 4.9,
    reviewCount: 3,
    images: ["https://placehold.co/600x600/c9a84c/0a0a0a?text=Rose+Eternelle"]
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany({});
    await Review.deleteMany({});

    const createdProducts = await Product.insertMany(products);

    const reviews = [];
    createdProducts.forEach(product => {
      reviews.push(
        {
          productId: product._id,
          author: "Priya S.",
          rating: 5,
          title: "Absolutely divine!",
          body: "This scent lasts all day and I get compliments everywhere I go.",
          date: new Date('2024-01-15')
        },
        {
          productId: product._id,
          author: "James L.",
          rating: 4,
          title: "Sophisticated scent",
          body: "Very elegant packaging and the fragrance itself is quite complex. Perfect for rainy days.",
          date: new Date('2024-02-10')
        },
        {
          productId: product._id,
          author: "Elena R.",
          rating: 5,
          title: "My new signature",
          body: "I've searching for a scent like this for years. It's balanced and truly luxurious.",
          date: new Date('2024-03-05')
        }
      );
    });

    await Review.insertMany(reviews);
    console.log("Database seeded successfully");
    process.exit();
  } catch (err) {
    console.error("Seeding error:", err);
    process.exit(1);
  }
};

seedDB();
