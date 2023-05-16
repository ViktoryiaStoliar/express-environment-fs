const express = require('express')
const bodyParser = require('body-parser')
const { getAllEnvironment, getEnvironmentById, createEnvironment } = require('./servise')

const app = express()

app.use(bodyParser.json())

// • GET “/” – получние всех элементов массива

app.get('/', (req, res) => {
    const data = getAllEnvironment()
    res.send(data)
})

// • GET “/:id” – получение отдельного элемента по id
app.get('/:id', (req, res) => {
    const { id } = req.params
    const data = getEnvironmentById(id)
    res.send(data)
})


// • POST “/” – с клиента приходит объект вида {"label": "TypeScript", "category":
// "programmingLanguages", "priority": 1 }. Добавить в массив объект в том случае, если
// совпадений label.toLowerCase() с id массива нет. Вернуть клиенту массив и статус
app.post('/', (req, res) => {
    const { label, category, priority } = req.body
    const data = createEnvironment(label, category, priority)
    res.send(data)
})


// • PUT “/:id” – обновить в массиве объект только в том случае, если есть совпадения с
// id. Вернуть клиенту массив и статус
app.put('/', (req, res) => {

})

app.listen(3000, () => {
    console.log('server is running');
})