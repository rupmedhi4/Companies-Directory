import express from "express";
import { allCompanyData } from "../controllers/company.controller.js";
import {addAllCompaniesData} from '../controllers/company.controller.js'

const router = express.Router();

router.get("/companies/all/data", allCompanyData);
router.post("/companies/data", addAllCompaniesData);

export default router;
