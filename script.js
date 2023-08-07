const get = document.querySelector("#submit");

const content = document.querySelector("#content");

let qrCode;

function generateQrCode(qrContent) {
  return new QRCode("qr", {
    text: qrContent,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
}

get.addEventListener("click", function () {
  let qrData = content.value;
  if (qrCode == null) {
    qrCode = generateQrCode(qrData);
  } else {
    qrCode.makeCode(qrData);
  }
});
