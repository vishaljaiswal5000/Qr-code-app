import "./style.css";
import QRCode from "qrcode";

document.querySelector("#app").innerHTML = `
  <div>
    <canvas id="canvas"></canvas>
  </div>
`;

const generateQRCode = (canvasId, url) => {
  const canvas = document.getElementById(canvasId);

  if (!canvas) {
    console.error(`Canvas with id '${canvasId}' not found.`);
    return;
  }

  QRCode.toCanvas(canvas, url)
    .then(() => console.log("QR code generated successfully!"))
    .catch((error) => console.error("Error generating QR code:", error));
};

generateQRCode("canvas", "https://www.npmjs.com/package/qrcode");
