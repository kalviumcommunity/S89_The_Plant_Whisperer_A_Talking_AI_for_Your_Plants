const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();


app.get('/ping', (req, res) => {
    try {
        res.status(200).send({msg:'pong'});
    } catch (error) {
        res.status(500).send({msg:"something went wrong"})
    }
});


app.listen(3000, () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Server connected successfully!")
    } catch (error) {
        console.log("Error")
    }
});