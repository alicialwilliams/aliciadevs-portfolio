require("dotenv").config
const express = require("express")
const cors = require("cors")
const path = require("path")
const contactRoute = require('./route/contactRoute')

const app = express();

//middleware
const whitelist = ['http://localhost:3000', 'http://localhost:3001', 'https://aliciadevs.herokuapp.com/']
app.use(express.json());
const corsOptions = {
    origin: function (origin, callback) {
        console.log("** Origin of request " + origin)
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            console.log("Origin acceptable")
            callback(null, true)
        } else {
            console.log("Origin rejected")
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.use(cors(corsOptions));

app.use("/", contactRoute);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client/build", "index.html"))
    });
}

const port = process.env.PORT || 3001;
app.listen(port, console.log(`Server listening to PORT ${port}.`));