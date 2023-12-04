const { bollywood, hollywood, technology, fitness, food } = require("../dummyData/data")

const bollywoodData = (req,res) =>{
    return res.send(bollywood)
}
const bollywoodcontroller = (req,res) =>{
    const id = req.params.id;
    console.log(id)
    const data = bollywood.find(item => item.id == id)
    console.log(data)
    return res.send(data)
}

const hollywoodData = (req,res) =>{
    return res.send(hollywood)
}
const hollywoodcontroller = (req,res) =>{
    const id = req.params.id;
    console.log(id)
    const data = hollywood.find(item => item.id == id)
    console.log(data)
    return res.send(data)
}

const technologyData = (req,res) =>{
    return res.send(technology)
}
const technologycontroller = (req,res) =>{
    const id = req.params.id;
    console.log(id)
    const data = technology.find(item => item.id == id)
    console.log(data)
    return res.send(data)
}

const fitnessData = (req,res) =>{
    return res.send(fitness)
}
const fitnesscontroller = (req,res) =>{
    const id = req.params.id;
    console.log(id)
    const data = fitness.find(item => item.id == id)
    console.log(data)
    return res.send(data)
}
const foodData = (req,res) =>{
    return res.send(food)
}
const foodcontroller = (req,res) =>{
    const id = req.params.id;
    console.log(id)
    const data = food.find(item => item.id == id)
    console.log(data)
    return res.send(data)
}
module.exports = {bollywoodData,bollywoodcontroller, hollywoodData, hollywoodcontroller, technologyData,technologycontroller, fitnessData, fitnesscontroller, foodData, foodcontroller}