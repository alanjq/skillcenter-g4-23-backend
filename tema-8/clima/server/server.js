const express = require('express')
const app = express()
const cors = require('cors');

const corsOptions = {
    origin: '*',
    // credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));

const responseLeon = require('./weather/leon.json')
const responseCancun = require('./weather/Cancun.json')
const responseMexico = require('./weather/mexico.json')

app.set('port', 3000)
app.get('/', (req, res)=> {
    res.json({
        "title": "test"
    })
})

app.get('/weather', (req, res)=> {
    res.json({
        "Ciudad": "Escribe el nombre de la ciudad"
    })
})

// Devuelve el nombre de la ciudad con el clima
app.get('/weather/leon', (req, res)=> {
    res.json(responseLeon)
})
app.get('/weather/cancun', (req, res)=> {
    res.json(responseCancun)
})
app.get('/weather/mexico', (req, res)=> {
    res.json(responseMexico)
})

app.get('/weather/:ciudad', (req, res)=> {
    res.status(404).json({ "Error": "no se encuentra la ciudad" })
})

app.listen(3000,(req, res)=>{
    console.log('Escuchando en puerto 3000')
})
