const express = require("express")

const app = express()


app.get('/', (require, repost) => {
    repost.send ("Olá mundo!")
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})