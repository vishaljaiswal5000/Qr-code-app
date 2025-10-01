#!/usr/bin/env node
import QRCode from "qrcode";

const args = process.argv.slice(2);

if (args.length === 0)
{
    console.log("Usage: node cli.js <text> [output_file] [--format=png|jpeg|svg] [--size=256] [--margin=0] [--ec=M]");
    process.exit(1);
}

const text = args[0];
const output = args[1] || "qrcode.png";

// Default options
const options = {
    width: 256,
    margin: 0,
    errorCorrectionLevel: "M",
    color: { dark: "#000000", light: "#ffffff" },
    type: "png"
};

// Parse CLI flags
args.forEach(arg => {
    if (arg.startsWith("--format=")) options.type = arg.split("=")[1];
    if (arg.startsWith("--size=")) options.width = parseInt(arg.split("=")[1]);
    if (arg.startsWith("--margin=")) options.margin = parseInt(arg.split("=")[1]);
    if (arg.startsWith("--ec=")) options.errorCorrectionLevel = arg.split("=")[1];
});

// Generate QR code
QRCode.toFile(output, text, options)
    .then(() => console.log(`QR Code saved to ${output}`))
    .catch(err => console.error(err));
