const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./config/db");
const user = require("./router/user");
InitiateMongoServer();
app.use(express.json());

const EventTimeSlotRoute = require('./router/EventTimeSlotRoute');
app.use('/',EventTimeSlotRoute)





// middleware
const corsOptions = {
  origin:"https://conference-room-booking-fnd.onrender.com"
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
const EventRoute = require('./router/EventRoutes');
app.use('/', cors(corsOptions), EventRoute);


// PORT
const PORT = 4000;

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

// router

app.use("/user", user);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
