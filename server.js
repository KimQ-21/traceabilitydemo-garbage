const express = require('express')
const path = require('path')
const app = express ()

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

const port = process.env.PORT || 5445

app.use(rollbar.errorHandler())

app.listen(port, () => console.log( `Server is running on ${port}`))
