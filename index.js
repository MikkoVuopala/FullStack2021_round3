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
  }

  next(error)
}

let persons = [
  {
      id: 1,
      name: "Arto Hellas",
      number: "040-123456"
  },
  {
      id: 2,
      name: "Ada Lovelace",
      number: "39-44-5323523"
  },
  {
      id: 3,
      name: "Dan Abramov",
      number: "12-43-234345"
  },
  {
      id: 4,
      name: "Mary Poppendick",
      number: "39-23-6423122"
  }
]


const generateId = () => {
  return Math.floor(Math.random() * Math.floor(1000));
}

app.get('/api/persons', (req, res, next) => {
  Nro.find({}).then(persons => {
    res.json(persons)
  })
  .catch(error => next(error))
})

app.get('/info', (req, res) => {
  res.send(`<p>Phonebook has info for ${persons.length} people.</p>
  ${Date()}`)
})

app.get('/api/persons/:id', (request, response, next) => {
  /*const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  if (person) {
      response.json(person)
  } else {
      response.status(404).end()
  }*/
  Nro.findById(request.params.id).then(person => {
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  }).catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
  /*const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)*/
  Nro.findByIdAndRemove(request.params.id).then(result => {
    response.status(204).end()
  })
  .catch(error => next(error))
})

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name) {
      return response.status(400).json({
          error: 'name missing'
      })
  }

  if (!body.number) {
    return response.status(400).json({
        error: 'number missing'
    })
}
if (persons.some(p => p.name === body.name)) {
    return response.status(400).json({
        error: `${body.name} is already added to the phonebook.`
    })
}

  const person = new Nro({
      //id: generateId(),
      name: body.name,
      number: body.number
  })

  person.save().then(savedNro => {
    response.json(savedNro)
  })
  /*persons = persons.concat(person)

  response.json(person)*/
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