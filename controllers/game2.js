const tamagotchi = require('../models/game2');


//Post Method
const createTamagotchiRecord = ( (req, res) => {
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

//Get all Method
const getAllTamagotchiRecords = (async (req, res) => {
    try{
        const data = await tamagotchi.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
const getTamagotchiRecord = (async (req, res) => {
    try{
        const data = await tamagotchi.findById(req.params.id);
        if (!data) {
            return res.status(404).send('Record not found');
        }
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
const updateTamagotchiRecord = (async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await tamagotchi.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
const deleteTamagotchiRecord = (async (req, res) => {
    try {
        const id = req.params.id;
        const data = await tamagotchi.findByIdAndDelete(id)
        res.send(`Record has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = {
    getAllTamagotchiRecords,
    getTamagotchiRecord,
    createTamagotchiRecord,
    updateTamagotchiRecord,
    deleteTamagotchiRecord
};