import { initUI, getOptions } from './ui.js';
import { generateQR, downloadQR } from './qr-helper.js';

initUI(); // must be called first

document.getElementById("generateButton").addEventListener("click", () => generateQR(getOptions()));
document.getElementById("qrInput").addEventListener("keypress", e => { if (e.key === 'Enter') generateQR(getOptions()); });
document.getElementById("downloadButton").addEventListener("click", () => downloadQR(getOptions()));
