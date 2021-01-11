import express from 'express';

const app = express()
const port = 3100

app.get('/', (request, response) => {
    response.send('Hello Moon Typescript!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
