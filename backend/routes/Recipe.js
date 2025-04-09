const router = require('express').Router()
const Recipe = require('../models/Recipe')
const User = require('../models/User')
const authMiddleware = require('../middleware/authMiddleware')

// Get Recipe for Auth Users
router.get('/get-recipe',(req,res) => {
    
})