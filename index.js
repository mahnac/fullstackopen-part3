const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

morgan.token('data', function (req, res) { return JSON.stringify(req.body) })

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))

app.get('/info', (request, response) => {
    const html = `<p>Phonebook has info for ${persons.length} people</p>
    <p>${new Date()}</p>`

    response.send(html)
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = parseInt(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
    }
    return response.status(404).end()
})

app.delete('/api/persons/:id', (request, response) => {
    const id = parseInt(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})

const generateId = () => Math.floor(Math.random() * 100)

app.post('/api/persons', ((request, response) => {
    const body = request.body
    const error = {error: ""}

    const isPersonFound = persons.find(person => person.name === body.name)

    if (!body.name) {
        error.error = "name is missing"
        return response.status(400).json(error)
    } else if (!body.number) {
        error.error = "number is missing"
        return response.status(400).json(error)
    } else if (isPersonFound) {
        error.error = `a person with name ${body.name} already exists`
        return response.status(400).json(error)
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generateId()

    }

    persons = persons.concat(person)

    response.json(person)
}))

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})