const categoriesRouter = require("express").Router(); 

const {
    findAllCategories,
    findCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
    checkEmptyName,
  } = require('../middlewares/category');
const {
    sendAllCategories,
    sendCategoryById,
    sendCategoryCreated,
    sendCategoryUpdated,
    sendCategoryDeleted
  } = require('../controllers/category');

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);

categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);

categoriesRouter.post("/categories", checkEmptyName, createCategory, sendCategoryCreated);

categoriesRouter.put("/categories/:id", checkEmptyName, updateCategory, sendCategoryUpdated);

categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;