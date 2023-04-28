const express = require('express');

const tamagotchi = require('../models/game2');

const router = express.Router()

module.exports = router;

//Post Method
router.post('/tamagotchi', (req, res) => {
    const data = new tamagotchi({
        nombreMascota: req.body.nombreMascota,
        nivelHambre: req.body.nivelHambre,
        nivelEnergia: req.body.nivelEnergia,
        nivelFelicidad: req.body.nivelFelicidad,
        fechaNacimiento: req.body.fechaNacimiento
    })
    try{
        const dataToSave = data.save();
        res.status(200).json(dataToSave)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})
/*
//Get all Method
router.get('/getAll', (req, res) => {
    res.send('Get All API')
})

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send(req.params.id)
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})*/