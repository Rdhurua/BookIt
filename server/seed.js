// seed.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Experience from "./models/Experience.js"; // make sure model path is correct
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ MongoDB Connection Error:", err));

// Experience data (converted from your frontend data)
const seedExperiences = [
  {
    place: "Kayaking",
    location: "Udupi",
    desc: "Curated small-group experience. Certified guide. Safety first with gear included.",
    price: 999,
    picture: "https://ik.imagekit.io/boqft1o5j/images/kakyaking.jpg",
    slots: [
      { date: "2025-11-05", time: "09:00 AM", available: true },
      { date: "2025-11-06", time: "02:00 PM", available: true },
    ]
  },
  {
    place: "Nandi Hills Sunrise",
    location: "Bangalore",
    desc: "Curated small-group experience. Certified guide. Safety first with gear included.",
    price: 899,
    picture: "https://ik.imagekit.io/boqft1o5j/images/NandiHill.jpg",
    slots: [
      { date: "2025-11-07", time: "05:30 AM", available: true },
      { date: "2025-11-08", time: "05:30 AM", available: true },
    ]
  },
  {
    place: "Coffee Trail",
    location: "Coorg",
    desc: "Curated small-group experience. Certified guide. Safety first with gear included.",
    price: 1299,
    picture: "https://ik.imagekit.io/boqft1o5j/images/cofee%20trail.jpg",
    slots: [
      { date: "2025-11-10", time: "08:00 AM", available: true },
      { date: "2025-11-11", time: "08:00 AM", available: true },
    ]
  },
  {
    place: "Kayaking",
    location: "Udupi",
    desc: "Curated small-group experience. Certified guide. Safety first with gear included.",
    price: 999,
    picture: "https://ik.imagekit.io/boqft1o5j/images/kaayaking2.jpg",
    slots: [
      { date: "2025-11-05", time: "09:00 AM", available: true },
      { date: "2025-11-06", time: "02:00 PM", available: true },
    ]
  },
  {
    place: "Nandi Hills Sunrise",
    location: "Bangalore",
    desc: "Curated small-group experience. Certified guide. Safety first with gear included.",
    price: 899,
    picture: "https://ik.imagekit.io/boqft1o5j/images/Nandii2.jpg",
    slots: [
      { date: "2025-11-07", time: "05:30 AM", available: true },
      { date: "2025-11-08", time: "05:30 AM", available: true },
    ]
  },
  {
    place: "Boat Cruise",
    location: "Sunderban",
    desc: "Curated small-group experience. Certified guide. Safety first with gear included.",
    price: 999,
    picture: "https://ik.imagekit.io/boqft1o5j/images/Boat.jpg",
    slots: [
      { date: "2025-11-05", time: "11:00 AM", available: true },
      { date: "2025-11-06", time: "04:00 PM", available: true },
    ]
  },
  {
    place: "Bungee Jumping",
    location: "Manali",
    desc: "Curated small-group experience. Certified guide. Safety first with gear included.",
    price: 999,
    picture: "https://ik.imagekit.io/boqft1o5j/images/Bunjee.jpg",
    slots: [
      { date: "2025-11-09", time: "10:00 AM", available: true },
      { date: "2025-11-09", time: "12:00 PM", available: true },
    ]
  },
  {
    place: "Coffee Trail",
    location: "Coorg",
    desc: "Curated small-group experience. Certified guide. Safety first with gear included.",
    price: 1299,
    picture: "https://ik.imagekit.io/boqft1o5j/images/cofee.jpg",
    slots: [
      { date: "2025-11-10", time: "08:00 AM", available: true },
      { date: "2025-11-11", time: "08:00 AM", available: true },
    ]
  }
];

async function seedDB() {
  try {
    await Experience.deleteMany({});
    await Experience.insertMany(seedExperiences);
    console.log("🌱 Database seeded successfully!");
  } catch (err) {
    console.error("❌ Error seeding database:", err);
  } finally {
    mongoose.connection.close();
  }
}

seedDB();
