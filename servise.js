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
    
    const obj = {
        "label": "TypeScript",
        "category": "programmingLanguages",
        "priority": 1
    }
}

module.exports = { getAllEnvironment, getEnvironmentById, createEnvironment } 