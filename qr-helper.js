import QRCode from "qrcode";

let lastText = "";

export function generateQR(options) {
    if (!options.text)
    {
        alert("Please enter text or URL.");
        return;
    }

    lastText = options.text;

    QRCode.toCanvas(options.canvas, options.text, {
        color: { dark: options.fgColor, light: options.bgColor },
        width: options.size,
        margin: options.margin,
        errorCorrectionLevel: options.ecLevel,
    }).catch(err => console.error(err));
}

export function downloadQR(options) {
    if (!lastText)
    {
        alert("Generate a QR code first!");
        return;
    }

    if (options.format === "svg")
    {
        QRCode.toString(lastText, {
            type: "svg",
            margin: options.margin,
            color: { dark: options.fgColor, light: options.bgColor },
            errorCorrectionLevel: options.ecLevel,
        }, (err, svg) => {
            if (err) return console.error(err);
            const blob = new Blob([svg], { type: "image/svg+xml" });
            const link = document.createElement("a");
            link.download = "qrcode.svg";
            link.href = URL.createObjectURL(blob);
            link.click();
        });
    } else
    {
        const mime = options.format === "jpeg" ? "image/jpeg" : "image/png";
        const link = document.createElement("a");
        link.download = `qrcode.${options.format}`;
        link.href = options.canvas.toDataURL(mime);
        link.click();
    }
}
