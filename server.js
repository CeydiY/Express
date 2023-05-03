require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

const routesTamagotchi = require('./routes/routesTamagotchi');
const routesLagarto = require('./routes/routesLagarto');


mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());

app.use('/api/tamagotchi', routesTamagotchi);
app.use('/api/lagarto', routesLagarto);

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})