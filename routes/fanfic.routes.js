const {Router} = require('express')
const config = require ('config')
const Fanfic = require('../models/Fanfic')
const auth = require('../middleware/auth.middleware')
const router = Router()

router.post('/generate', async (req, res) => {
    try {
        const baseUrl = config.get ('baseUrl')
        const {from} = req.body

     

              
    } catch (error) {
        res.status(500).json ({message: 'Something went wrong, please try again'})
    }

})

router.get('/', auth , async (req, res) => {
    try {
        const fanfics = await Fanfic.find({ author: req.user.userId})
        res.json(fanfics)              
    } catch (error) {
        res.status(500).json ({message: 'Something went wrong, please try again'})
    }

})

router.get('/:id', async (req, res) => {
    try {
        const fanfic = Fanfic.findById(req.params.id)
        res.json(fanfic) 
              
    } catch (error) {
        res.status(500).json ({message: 'Something went wrong, please try again'})
    }

})

module.exports = router