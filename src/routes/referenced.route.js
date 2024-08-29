import express from "express";
import {
  generateImageQRByUser,
  generateLink,
  generateQR,
} from "../controllers/referenciados.controller.js";

const router = express.Router();

router.post("/generate-link", generateLink);
router.get("/generate-qr/:referCode", generateQR);
router.get("/generate-qr-image/:distributorId", generateImageQRByUser);

export default router;
