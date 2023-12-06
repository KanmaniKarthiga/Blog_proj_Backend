const { bollywoodcontroller, bollywoodData,hollywoodcontroller, technologycontroller, fitnesscontroller, foodcontroller, hollywoodData, technologyData, fitnessData, foodData, homeData, homecontroller } = require("../controller/categoryController")

const route = require("express").Router()

route.get("/", homeData)
route.get("/:id", homecontroller)

route.get("/bollywood", bollywoodData)
route.get("/bollywood/:id", bollywoodcontroller)

route.get("/hollywood" , hollywoodData)
route.get("/hollywood/:id", hollywoodcontroller)

route.get("/technolgy" , technologyData)
route.get("/technolgy/:id" , technologycontroller)

route.get("/fitness" , fitnessData)
route.get("/fitness/:id" , fitnesscontroller)

route.get("/food" , foodData)
route.get("/food/:id" , foodcontroller)





module.exports = {route}