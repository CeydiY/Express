const express = require("express");
const router = express.Router()

const  {
    getAllLagartoRecords,
    getLagartoRecord,
    createLagartoRecord,
    updateLagartoRecord,
    deleteLagartoRecord
} = require('../controllers/game1.js')

router.get('/records', getAllLagartoRecords)

router.get('/records/:id', getLagartoRecord)

router.post('/lagarto', createLagartoRecord)

router.put('/records/:id', updateLagartoRecord)

router.delete('/records/:id', deleteLagartoRecord)

module.exports = router


