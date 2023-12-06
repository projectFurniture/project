// const express = require("express");

// const cors = require("cors");

// const app = express();

// const db = require("./app/models");

// db.mongoose

//   .connect(db.url, {
//     useNewUrlParser: true,

//     useUnifiedTopology: true,
//   })

//   .then(() => {
//     console.log("Connected to the database!");
//   })

//   .catch((err) => {
//     console.log("Cannot connect to the database!", err);

//     process.exit();
//   });

// const corsOptions = {
//   origin: [
//     "http://localhost:3000"
//     //,"https://simply-organic-frontend.onrender.com",
//   ],
// };

// //new code - This header allows requests from any domain. 
// //           If you want to allow requests from a specific domain, you can replace the asterisk with the domain name 
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });
// //new code ends
// app.use(cors(corsOptions));

// // parse requests of content-type - application/json

// app.use(express.json());

// // parse requests of content-type - application/x-www-form-urlencoded

// app.use(express.urlencoded({ extended: true }));

// // simple route

// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to Furniture Store application." });
// });

// require("./app/routes/product.routes")(app);
// require("./app/routes/user.routes")(app);
// require("./app/routes/order.routes")(app);
// require("./app/routes/category.routes")(app);

// // set port, listen for requests

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server is running on port http://localhost:${PORT}`);
// });

const express = require("express");

const cors = require("cors");

const cookieSession = require("cookie-session");

const app = express();

const db = require("./app/models");

db.mongoose

  .connect(db.url, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("Connected to the database!");
  })

  .catch((err) => {
    console.log("Cannot connect to the database!", err);

    process.exit();
  });

const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:4200",
    "https://simply-organic-frontend.onrender.com",
    "https://simply-organic.netlify.app",
  ],
  credentials: true,
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json

app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded

app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "grocery-store-session",
    secret: "GROCERY_COOKIE_SECRET_KEY", // should use as secret environment variable
    httpOnly: true,
  })
);

// simple route

app.get("/", (req, res) => {
  res.json({ message: "Welcome to FurnitureStore application." });
});

require("./app/routes/auth.routes")(app);
require("./app/routes/product.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/order.routes")(app);
require("./app/routes/category.routes")(app);

// set port, listen for requests

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
