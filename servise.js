const { json } = require('express');
const fs = require('fs')

const path = './storage/environment.json'

function getAllEnvironment() {
    const data = (JSON.parse(fs.readFileSync(path)))
    return data
}

function getEnvironmentById(id) {
    const data = (JSON.parse(fs.readFileSync(path)))
    const filtered = data.filter((el) => el.id == id)
    return filtered
}

function createEnvironment(label, category, priority) {
    const data = JSON.parse(fs.readFileSync(path))
    const obj = {
        id: label.toLowerCase(),
        label: label,
        category: category,
        priority: priority
    }
    //     const filtered = data.filter((el) => el.label.toLowerCase() == label.toLowerCase())
    //    if()
    data.push(obj)
    fs.writeFileSync(path, JSON.stringify(data))
    return data
}

module.exports = { getAllEnvironment, getEnvironmentById, createEnvironment } 