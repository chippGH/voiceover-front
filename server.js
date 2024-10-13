import express from 'express'

const app = express()

app.get('/health-check', (req, res) => {
    res.send({
        message: 'Server is up and running',
        status: 200
    })
})