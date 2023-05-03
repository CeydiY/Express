const lagarto = require('../models/game1');

//Post Method
const createLagartoRecord = ((req, res) => {
    const data = new lagarto({
        nombreJugador: req.body.nombreJugador,
        fechaHoraPartida: req.body.fechaHoraPartida,
        resultadoPartida: req.body.resultadoPartida
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
const getAllLagartoRecords = (async (req, res) => {
    try {
        const data = await lagarto.find();
        res.json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
const getLagartoRecord = (async (req, res) => {
    try{
        const data = await lagarto.findById(req.params.id).exec();
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
const updateLagartoRecord = ( async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await lagarto.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
const deleteLagartoRecord = (async (req, res) => {
    try {
        const id = req.params.id;
        const data = await lagarto.findByIdAndDelete(id)
        res.send(`Record has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = {
    getAllLagartoRecords,
    getLagartoRecord,
    createLagartoRecord,
    updateLagartoRecord,
    deleteLagartoRecord
};