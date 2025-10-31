const colorBackground = document.getElementById('color-background');
const colorQR = document.getElementById('color-qr');
const previewQrCode = document.getElementById('qr-preview');
const btnShare = document.getElementById('btn-share');
const qrLink = document.getElementById('qr-link');

const colorsSelected = {
  backgraund: '#0ff',
  colorQR: '#f00',
};

qrLink.addEventListener('input', function (event) {
  if (!qrLink.value) {
    return alert('Informe link');
  } else {
    previewQrCode.setAttribute(
      'src',
      `https://quickchart.io/qr?text=${
        qrLink.value
      }&dark=${colorsSelected.colorQR.slice(
        1
      )}&light=${colorsSelected.backgraund.slice(1)}&ecLevel=Q&format=svg`
    );
  }
});

colorBackground.addEventListener('input', (e) => {
  if (!qrLink.value) {
    return alert('Informe link');
  } else {
    colorsSelected.backgraund = e.target.value;

    previewQrCode.setAttribute(
      'src',
      `https://quickchart.io/qr?text=${
        qrLink.value
      }&dark=${colorsSelected.colorQR.slice(
        1
      )}&light=${colorsSelected.backgraund.slice(1)}&ecLevel=Q&format=svg`
    );
  }
});

colorQR.addEventListener('input', (e) => {
  if (!qrLink.value) {
    alert('Informe um Link');
    return;
  } else {
    colorsSelected.colorQR = e.target.value;

    previewQrCode.setAttribute(
      'src',
      `https://quickchart.io/qr?text=${
        qrLink.value
      }&dark=${colorsSelected.colorQR.slice(
        1
      )}&light=${colorsSelected.backgraund.slice(1)}&ecLevel=Q&format=svg`
    );
  }
});

btnShare.addEventListener('click', () => {
  if (!qrLink.value) {
    alert('Informe um Link');
    return;
  }

  btnShare.setAttribute(
    'href',
    `https://quickchart.io/qr?text=${
      qrLink.value
    }&dark=${colorsSelected.colorQR.slice(
      1
    )}&light=${colorsSelected.backgraund.slice(1)}&ecLevel=Q&format=svg`
  );
});
