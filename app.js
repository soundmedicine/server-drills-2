const express = require('express')
const cors = require('cors')

let instructors = [{
    id: 1,
    name: 'Kyle Coberly',
    title: 'Faculty Director',
    numberOfDogs: 0
}, {
    id: 2,
    name: 'Danny Fritz',
    title: 'Lead Instructor',
    numberOfDogs: 0
}, {
    id: 3,
    name: 'CJ Reynolds',
    title: 'Lead Instructor',
    numberOfDogs: 0
}, {
    id: 4,
    name: 'Brooks Patton',
    title: 'Lead Instructor',
    numberOfDogs: 0
}, {
    id: 5,
    name: 'Roberto Ortega',
    title: 'Lead Instructor',
    numberOfDogs: 1
}, {
    id: 6,
    name: 'Chad Drummond',
    title: 'Instructor',
    numberOfDogs: 0
}, {
    id: 7,
    name: 'Kim Schlesinger',
    title: 'Director of Instruction',
    numberOfDogs: 0
}, {
    id: 8,
    name: 'Peter Ostiguy',
    title: 'Associate Instructor',
    numberOfDogs: 1
}, {
    id: 9,
    name: 'Cass Torske',
    title: 'Resident',
    numberOfDogs: 1
}, {
    id: 10,
    name: 'Matt Winzer',
    title: 'Resident',
    numberOfDogs: 2
}, {
    id: 11,
    name: 'Aaron Goodman',
    title: 'Resident',
    numberOfDogs: 0
}, {
    id: 12,
    name: 'Michelle Bergquist',
    title: 'Resident',
    numberOfDogs: 1
}]

function findById(data, id) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            return data[i]
        }
    }
    return null
}

const app = express()
app.use(cors())

app.get('/', function(request, responst) {
    response.json({data: instructors})
})

app.get('/:id', function(request, response) {
    let record = findById(instructors, request.params.id)
    if (!record) {
        response.status = 404
        response.json({
            error: {
                message: 'No record found!'
            }
        })
    }
    response.json({data: record})
})

app.listen(process.env.PORT || 3000)
console.log('listening on port: 3000')