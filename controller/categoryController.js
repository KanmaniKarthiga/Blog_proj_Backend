const { bollywood, hollywood, technology, fitness, food } = require("../dummyData/data")

const bollywoodcontroller = (req,res) =>{
    return res.send(bollywood)
}
const hollywoodcontroller = (req,res) =>{
    return res.send(hollywood)
}
const technologycontroller = (req,res) =>{
    return res.send(technology)
}
const fitnesscontroller = (req,res) =>{
    return res.send(fitness)
}
const foodcontroller = (req,res) =>{
    return res.send(food)
}
module.exports = {bollywoodcontroller, hollywoodcontroller, technologycontroller, fitnesscontroller, foodcontroller}