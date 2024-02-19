const express = require("express");
const isAuthenticated = require("../../middlewares/isAuthenticated");
const planController = require("../../controllers/plan/planController");
const isAdmin = require("../../middlewares/isAdmin");

const planRouter = express.Router();

//-----Create plan----

planRouter.post("/create", isAuthenticated, isAdmin, planController.createPlan);

//----lists all plans----
planRouter.get("/", planController.lists);

//----update plan----
planRouter.put("/:planId", isAuthenticated, isAdmin, planController.update);

//--- get plan---
planRouter.get("/:planId", planController.getPlan);

//---delete plan---
planRouter.delete("/:planId", isAuthenticated, isAdmin, planController.delete);

module.exports = planRouter;
