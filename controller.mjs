import { CreateMotivation, GetMotivation } from './model.mjs'
import express from 'express'

const PORT = 3001

const app = express();

app.use(express.json());

app.post('/motivation', (req, res) => {
    CreateMotivation(req.body.quote, req.body.author)
    .then(mot => {
        res.status(201).json(mot)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

app.get('/motivation', (req, res) => {
    GetMotivation()
    .then(mot => {
        res.status(201).json(mot)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});