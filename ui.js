// ui.js

export function initUI() {
    const app = document.getElementById("app");
    app.innerHTML = `
    <div class="qr-app">
      <h1>QR Code Generator</h1>
      <p class="subtitle">Create and download QR codes with custom colors, size, margin, and error correction.</p>

      <div class="form-group">
        <label for="qrInput">Text or URL</label>
        <input type="text" id="qrInput" placeholder="Enter text or URL"/>
      </div>

      <div class="form-group">
        <label>Colors</label>
        <div class="color-options">
          <label>Foreground
            <input type="color" id="colorFG" value="#000000"/>
          </label>
          <label>Background
            <input type="color" id="colorBG" value="#ffffff"/>
          </label>
        </div>
      </div>

      <div class="form-group">
        <label>Size & Margin</label>
        <div class="size-options">
          <label>Size (px)
            <input type="number" id="size" value="256" min="64" max="1024"/>
          </label>
          <label>Margin
            <input type="number" id="margin" value="0" min="0" max="20"/>
          </label>
        </div>
      </div>

      <div class="form-group">
        <label>Error Correction</label>
        <select id="ecLevel">
          <option value="L">L (Low)</option>
          <option value="M" selected>M (Medium)</option>
          <option value="Q">Q (Quartile)</option>
          <option value="H">H (High)</option>
        </select>
      </div>

      <div class="form-group">
        <button id="generateButton" class="btn">Generate QR Code</button>
      </div>

      <div class="qr-preview">
        <canvas id="canvas"></canvas>
      </div>

      <div class="form-group download-group">
        <label>Download Format</label>
        <select id="downloadFormat">
          <option value="png">PNG</option>
          <option value="jpeg">JPEG</option>
          <option value="svg">SVG</option>
        </select>
        <button id="downloadButton" class="btn">Download</button>
      </div>

      <div class="app-guide">
        <h2>📖 App Guide</h2>
        <table>
          <thead>
            <tr><th>Input</th><th>Meaning / Usage</th></tr>
          </thead>
          <tbody>
            <tr><td>Text or URL</td><td>Enter the text or URL to encode.</td></tr>
            <tr><td>Foreground Color</td><td>Color of QR squares.</td></tr>
            <tr><td>Background Color</td><td>Color of the QR background.</td></tr>
            <tr><td>Size (px)</td><td>Width/height of QR code.</td></tr>
            <tr><td>Margin</td><td>Space around QR code (0 for none).</td></tr>
            <tr><td>Error Correction</td><td>L/M/Q/H for redundancy.</td></tr>
            <tr><td>Download Format</td><td>PNG, JPEG, or SVG.</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// **Export getOptions function**
export function getOptions() {
    return {
        text: document.getElementById("qrInput").value.trim(),
        fgColor: document.getElementById("colorFG").value,
        bgColor: document.getElementById("colorBG").value,
        size: parseInt(document.getElementById("size").value),
        margin: parseInt(document.getElementById("margin").value),
        ecLevel: document.getElementById("ecLevel").value,
        format: document.getElementById("downloadFormat").value,
        canvas: document.getElementById("canvas"),
    };
}
