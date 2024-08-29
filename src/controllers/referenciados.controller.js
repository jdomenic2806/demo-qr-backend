import Distributor from "../models/distributor.model.js";

import qr from "qr-image";
import { v4 as uuidv4 } from "uuid";

export async function generateLink(req, res) {
  try {
    const { name = 'jose' } = req.body;

    // Generar un código único de referenciado
    const referCode = uuidv4().slice(0, 8); // 8 caracteres del UUID

    // Crear un nuevo distribuidor
    const distributor = await Distributor.create({
      name,
      refer_code: referCode,
    });

    // Generar el link de referenciado
    const referLink = `https://axiosmobile.mx/?ref=${referCode}`;

    res.json({
      message: "Refer link generated successfully",
      distributor,
      referLink,
      referCode,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error generating refer link" });
  }
}

export async function generateQR(req, res) {
  try {
    const { referCode } = req.params;
    const referLink = `https://axiosmobile.mx/?ref=${referCode}`;

    // Generar el QR code
    // const qrCode = qr.image(referLink, { type: "png" });

    // res.type("png");
    // qrCode.pipe(res);

    const qrImage = qr.imageSync(referLink, { type: 'png' });
    const qrBase64 = qrImage.toString('base64');
    res.status(200).json({ qrCode: `data:image/png;base64,${qrBase64}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error generating QR code" });
  }
}

export async function generateImageQRByUser(req, res) {
  try {
    const { distributorId } = req.params;

    const distributor = await Distributor.findByPk(distributorId);

    if (!distributor) {
      return res.status(404).json({ message: "Distributor not found" });
    }

    const referLink = `https://axiosmobile.mx/?ref=${distributor.refer_code}`;

    // Generar el QR code
    // const qrCode = qr.image(referLink, { type: "png" });
    
    // Generar el QR code
    const qrImage = qr.imageSync(referLink, { type: 'png' });
    const qrBase64 = qrImage.toString('base64');
    res.status(200).json({ qrCode: `data:image/png;base64,${qrBase64}`, referCode: distributor.refer_code });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching QR image" });
  }
}
