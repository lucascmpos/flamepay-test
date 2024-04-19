import QRCode from "qrcode";

export default function useQRCode(qrCodeContent, options) {
  const generateQRCode = () => {
    return new Promise((resolve, reject) => {
      QRCode.toDataURL(qrCodeContent, options, (err, url) => {
        if (err) {
          reject(err);
        } else {
          resolve(url);
        }
      });
    });
  };

  return {
    generateQRCode,
  };
}
