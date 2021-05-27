require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const Nro = require('./models/numbers')

app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())
app.use(express.static('build'))

const errorHandler = (error, request, response, next) => {
    console.error(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }

    next(error)
}

/*const generateId = () => {
    return Math.floor(Math.random() * Math.floor(1000))
}*/

app.get('/api/persons', (req, res, next) => {
    Nro.find({}).then(persons => {
        res.json(persons)
    })
        .catch(error => next(error))
})

app.get('/info', (req, res) => {
    Nro.countDocuments({}, function(err, count) {
        res.send(`<p>Phonebook has info for ${count} people.</p>
        ${Date()}`)
    })

})

app.get('/api/persons/:id', (request, response, next) => {
    Nro.findById(request.params.id).then(person => {
        if (person) {
            response.json(person)
        } else {
            response.status(404).end()
        }
    }).catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
    Nro.findByIdAndRemove(request.params.id).then(() => {
        response.status(204).end()
    })
        .catch(error => next(error))
})

app.post('/api/persons', (request, response, next) => {
    const body = request.body

    const person = new Nro({
        name: body.name,
        number: body.number
    })

    person.save()
        .then(savedNro => savedNro.toJSON())
        .then(savedAndFormattedNro => response.json(savedAndFormattedNro))
        .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})