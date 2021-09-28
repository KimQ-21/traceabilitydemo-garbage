const express = require('express')
const path = require('path')
const app = express ()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client/index.html'))
})

const port = process.env.PORT || 5445

app.listen(port, () => console.log( `Server is running on ${port}`))
