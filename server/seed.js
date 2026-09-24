require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userM = require("./models/user.model");
const movieM = require("./models/movie.model");

const MONGO_URI = process.env.MONGO_URI;

async function seed() {
  try {
    // Connect DB
    await mongoose.connect(MONGO_URI);

    console.log("MongoDB connected");

    // Clear existing data
    await userM.deleteMany({});
    await movieM.deleteMany({});

    console.log("Old data removed");

    // Password
    const hashedPassword = await bcrypt.hash("123456", 10);

    // Create users
    const users = await userM.insertMany([
      {
        name: "Alex Johnson",
        nickname: "Alex",
        email: "alex@example.com",
        password: hashedPassword,
      },
      {
        name: "Sarah Wilson",
        nickname: "Sarah",
        email: "sarah@example.com",
        password: hashedPassword,
      },
      {
        name: "Michael Brown",
        nickname: "Mike",
        email: "mike@example.com",
        password: hashedPassword,
      },
    ]);

    console.log(`${users.length} users created`);

    // User references
    const alex = users[0];
    const sarah = users[1];
    const mike = users[2];

    // Movies / diary entries
    const movies = await movieM.insertMany([
      {
        user: alex._id,
        name: "Interstellar",
        rating: 5,
        note: "One of the most beautiful movies I have ever watched. The music, visuals and story were incredible.",
        watchdate: new Date("2026-09-20"),
        like: "Rewatch",
      },

      {
        user: alex._id,
        name: "Inception",
        rating: 5,
        note: "A brilliant concept with an amazing story. Definitely a movie that makes you think.",
        watchdate: new Date("2026-09-18"),
        like: "Must Watch",
      },

      {
        user: alex._id,
        name: "The Dark Knight",
        rating: 5,
        note: "Fantastic performances and one of the best superhero movies ever made.",
        watchdate: new Date("2026-09-15"),
        like: "Rewatch",
      },

      {
        user: alex._id,
        name: "The Prestige",
        rating: 4,
        note: "A clever story with a great ending. I noticed more details on the second watch.",
        watchdate: new Date("2026-09-12"),
        like: "Rewatch",
      },

      {
        user: sarah._id,
        name: "La La Land",
        rating: 5,
        note: "Beautiful cinematography, music and an emotional story.",
        watchdate: new Date("2026-09-21"),
        like: "Rewatch",
      },

      {
        user: sarah._id,
        name: "Whiplash",
        rating: 5,
        note: "Intense from beginning to end. The performances were incredible.",
        watchdate: new Date("2026-09-19"),
        like: "Must Watch",
      },

      {
        user: sarah._id,
        name: "The Grand Budapest Hotel",
        rating: 4,
        note: "Stylish, funny and completely unique.",
        watchdate: new Date("2026-09-16"),
        like: "Good",
      },

      {
        user: mike._id,
        name: "The Matrix",
        rating: 5,
        note: "Still feels incredibly creative even after all these years.",
        watchdate: new Date("2026-09-22"),
        like: "Rewatch",
      },

      {
        user: mike._id,
        name: "Fight Club",
        rating: 4,
        note: "A strange but fascinating movie with a lot to think about afterwards.",
        watchdate: new Date("2026-09-17"),
        like: "Must Watch",
      },

      {
        user: mike._id,
        name: "Parasite",
        rating: 5,
        note: "Amazing storytelling. The change in tone throughout the movie was fantastic.",
        watchdate: new Date("2026-09-14"),
        like: "Must Watch",
      },
    ]);

    console.log(`${movies.length} movies created`);

    console.log("\n-----------------------------");
    console.log("SEED COMPLETE");
    console.log("-----------------------------");

    console.log("\nTest accounts:");

    console.log(`
Email: alex@example.com
Password: 123456

Email: sarah@example.com
Password: 123456

Email: mike@example.com
Password: 123456
`);

  } catch (error) {
    console.error("Seed failed:", error);
  } finally {
    await mongoose.connection.close();
    console.log("MongoDB connection closed");
  }
}

seed();