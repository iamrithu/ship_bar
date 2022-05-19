import express from "express";
const router = express.Router();
import {
  getAllShipBar,
  createShipBar,
  updateShipBar,
  deleteShipBar,
} from "../controller/shipBar.js";

router.route("/shipBar").get(getAllShipBar).post(createShipBar);
router.route("/shipBar/:id").patch(updateShipBar).delete(deleteShipBar);

export default router;
