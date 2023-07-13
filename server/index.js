const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 6868
const mongoose = require('mongoose')
mongoose.connect(process.env.DB_CONNECT)
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Database fail'))

const app = express()
const cors = require('cors')
app.use(cors())
const todoItemRouter = require('./routes/todoitem')
app.use(express.json())
app.use('/', todoItemRouter)

app.get('/', (req, res) => {
    return res.send("hello work")
})
app.listen(PORT, () => console.log("server connected"))
