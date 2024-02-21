// Import
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const routers = require("./routes/CutVideo.route.js");


// Configuration

const app = express();
app.use(bodyParser.json());
app.use(cors())


app.get('/', (req, res) => {
    res.status(500).send("Hello, world!");
})


app.use('/cutYoutubeVideo', routers);


app.listen(9000, () => {
    console.log("listening on Server 9000");
});