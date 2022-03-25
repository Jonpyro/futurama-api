const express = require('express')
const router = express.Router()
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

router.get('/', (req, res)=>{
    const URL = 'https://api.sampleapis.com/futurama/characters'

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('characters', {
                title: 'Characters',
                name: 'Character Index!',
                data
            })
        })
})

router.get('/:id', (req, res)=>{
    const id = req.params.id
    const URL = `https://api.sampleapis.com/futurama/characters/${id}`

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('characterSingle', {
                title: `${data.name.first} ${data.name.last}`,
                name: `${data.name.first} ${data.name.last}`,
                data
            })
        })
})

module.exports = router