import express from "express";
const router = express.Router();
import { getAllShipBar, createShipBar } from "../controller/shipBar.js";

router.route("/shipBar").get(getAllShipBar).post(createShipBar);

export default router;
