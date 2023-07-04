const express = require('express')
const userRoutes = require('./src/routes/user-routes')

const app = express()
const PORT = 3000

app.use(express.json())
app.use('/users', userRoutes)

app.listen(PORT, () => {

    console.log(`Corriendo mi API con express en el puerto ${PORT}`)
})