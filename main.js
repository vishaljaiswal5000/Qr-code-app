import "./style.css";
import QRCode from "qrcode";

// Insert HTML elements for input, button, and canvas
document.querySelector("#app").innerHTML = `
  <div>
    <div>
      <input type="text" id="qrInput" placeholder="Enter text or URL" />
      <button id="generateButton">Generate QR Code</button>
    </div>
    <div>
      <canvas id="canvas"></canvas>
    </div>
 </div>
`;

// Reusable function to generate QR code
function generateQRCode(canvasId, text) {
  const canvas = document.getElementById(canvasId);

  if (!canvas) {
    console.error(`Canvas with id '${canvasId}' not found.`);
    return;
  }

  QRCode.toCanvas(canvas, text)
    .then(() => console.log("QR code generated successfully!"))
    .catch((error) => console.error("Error generating QR code:", error));
}

// Event handler to trigger QR code generation
function handleGenerateClick() {
  const input = document.getElementById("qrInput").value.trim();
  if (input) {
    generateQRCode("canvas", input);
  } else {
    alert("Please enter some text or a URL to generate a QR code.");
  }
}

// Add event listeners
document
  .getElementById("generateButton")
  .addEventListener("click", handleGenerateClick);
document.getElementById("qrInput").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    handleGenerateClick();
  }
});
