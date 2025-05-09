function generate() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // 背景
  ctx.fillStyle = "#fffdf6"; // 米白色
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 文本渲染
  ctx.fillStyle = "#333";
  ctx.font = "bold 40px sans-serif";
  ctx.fillText(document.getElementById("name").value, 50, 100);
  ctx.font = "30px sans-serif";
  ctx.fillText(document.getElementById("title").value, 50, 160);
  ctx.fillText(document.getElementById("phone").value, 50, 220);
  ctx.fillText(document.getElementById("email").value, 50, 280);

  // 二维码上传渲染
  const qr1 = document.getElementById("qr1").files[0];
  const qr2 = document.getElementById("qr2").files[0];

  let loaded1 = false, loaded2 = false;

  function checkAndDownload() {
    if ((qr1 && !loaded1) || (qr2 && !loaded2)) return;
    const download = document.getElementById("download");
    download.href = canvas.toDataURL("image/png");
    download.style.display = "inline-block";
  }

  if (qr1) {
    const img1 = new Image();
    img1.onload = () => {
      ctx.drawImage(img1, 400, 500, 150, 150);
      loaded1 = true;
      checkAndDownload();
    };
    img1.src = URL.createObjectURL(qr1);
  }

  if (qr2) {
    const img2 = new Image();
    img2.onload = () => {
      ctx.drawImage(img2, 700, 500, 150, 150);
      loaded2 = true;
      checkAndDownload();
    };
    img2.src = URL.createObjectURL(qr2);
  }

  if (!qr1 && !qr2) {
    checkAndDownload();
  }
}
