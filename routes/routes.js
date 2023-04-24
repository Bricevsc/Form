import express from "express";
const router = express.Router();

import HomeController from "../controllers/home.js";
import FormController from "../controllers/form.controller.js"
import SendForm from "../controllers/form.controller.js"

router.get("/", HomeController);
router.get("/form", FormController)
router.post("/form", SendForm)

export default router;