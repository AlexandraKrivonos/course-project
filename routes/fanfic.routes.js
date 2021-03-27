const {Router} = require('express')
const config = require ('config')
const Fanfic = require('../models/Fanfic')
const User = require('../models/User')
const auth = require('../middleware/auth.middleware')
const router = Router()

router.post('/generate', async (req, res) => {
    try {
        const baseUrl = config.get ('baseUrl')
        const {title, genre, shortDescription, userId} = req.body


        const fanfic = new Fanfic ({ title, genre, shortDescription, author: userId, likes: 0})
        await fanfic.save()

        res.status(201).json({ message: 'Fanfic created'})

              
    } catch (error) {
        console.dir(error)
        res.status(500).json ({message: 'Something went wrong, please try again'})
    }

})

router.get('/', auth , async (req, res) => {
    try {
        const fanfics = await Fanfic.find({ author: req.user.userId})
        const author = await User.findById(req.user.userId)
        const fanficsSerialized = fanfics.map((fanfic) => {
            return {...fanfic._doc, authorName: author.name}
        })
        res.json(fanficsSerialized)              
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