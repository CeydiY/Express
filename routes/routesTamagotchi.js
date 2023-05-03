const express = require("express");
const router = express.Router()

const  {
    getAllTamagotchiRecords,
    getTamagotchiRecord,
    createTamagotchiRecord,
    updateTamagotchiRecord,
    deleteTamagotchiRecord
} = require('../controllers/game2.js')

router.get('/records', getAllTamagotchiRecords)

router.get('/records/:id', getTamagotchiRecord)

router.post('/', createTamagotchiRecord)

router.put('/records/:id', updateTamagotchiRecord)

router.delete('/records/:id', deleteTamagotchiRecord)

module.exports = router
