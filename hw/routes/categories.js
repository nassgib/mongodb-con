const categoriesRouter = require("express").Router(); 

const findAllCategories = require('../middlewares/category');
const sendAllCategories = require('../controllers/category');

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);

module.exports = categoriesRouter;