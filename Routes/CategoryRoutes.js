const { bollywoodcontroller, hollywoodcontroller, technologycontroller, fitnesscontroller, foodcontroller } = require("../controller/categoryController")

const route = require("express").Router()

route.get("/bollywood", bollywoodcontroller)
route.get("/hollywood" , hollywoodcontroller)
route.get("/technolgy" , technologycontroller)
route.get("/fitness" , fitnesscontroller)
route.get("/food" , foodcontroller)




module.exports = {route}