const express = require('express')
const path = require('path')
const app = express ()

app.use(express.json())

const Rollbar = require('rollbar')

const rollbar = new Rollbar({
    accessToken: 'a5c12f58858f491494b7166a7e54ae3e',
    captureUncaught: true,
    captureUnhandledRejections: true
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client/index.html'))
    rollbar.info('html was monitored successfully')
})

//Student stuff
const studentArr = []

app.post('/api/students', (req, res) => {
    const {name} = req.body
    // const name = req.body.name //it's the same thing here
    studentArr.push(name)

    rollbar.log('Student successfully added')
    res.status(200).send(studentArr)
})

const port = process.env.PORT || 5445

app.use(rollbar.errorHandler())

app.listen(port, () => console.log( `Server is running on ${port}`))
