# QR Code Generator

A modern, modular QR Code Generator that allows you to **create, customize, and download QR codes** in different formats (PNG, JPEG, SVG). Includes options for color, size, margin, and error correction. Comes with a **web interface** and a **CLI option**.

---

## Features

- Generate QR codes from **text or URLs**
- **Customizable colors**: foreground and background
- **Adjustable size and margin**
- **Error correction levels**: L, M, Q, H
- **Download formats**: PNG, JPEG, SVG
- **Web app guide** explaining all input properties
- **CLI support** for quick QR generation from terminal

---

## Web App Usage

1. Open `index.html` in your browser.
2. Enter the text or URL you want to encode.
3. Customize QR code options:
   - **Foreground Color**: Color of QR squares
   - **Background Color**: Color of QR background
   - **Size (px)**: Width and height in pixels
   - **Margin**: Padding around the QR code
   - **Error Correction**: L, M, Q, H
   - **Download Format**: PNG, JPEG, SVG
4. Click **Generate QR Code** to preview.
5. Click **Download** to save the QR code in the selected format.

---

## App Guide Table

| Input            | Meaning / Usage                                                             |
| ---------------- | --------------------------------------------------------------------------- |
| Text or URL      | Enter the text or URL to encode.                                            |
| Foreground Color | Color of QR squares.                                                        |
| Background Color | Color of the QR background.                                                 |
| Size (px)        | Width/height of QR code.                                                    |
| Margin           | Space around QR code (0 for none).                                          |
| Error Correction | L/M/Q/H for redundancy; higher level allows scanning if QR code is damaged. |
| Download Format  | PNG, JPEG, or SVG.                                                          |

---

## CLI Usage

You can generate QR codes directly from the terminal using Node.js.

```bash
npm install
npm run dev
```
