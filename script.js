function generate() {
  const name = document.getElementById("name").value;
  const title = document.getElementById("title").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const website = document.getElementById("website").value;
  const bgInput = document.getElementById("bg");

  if (!bgInput.files[0]) {
    alert("请上传背景图！");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const img = new Image();
    img.onload = function () {
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");

      // 提高清晰度：画布设置为2倍
      canvas.width = 850 * 2;
      canvas.height = 500 * 2;
      ctx.scale(2, 2);

      ctx.clearRect(0, 0, 850, 500);
      ctx.drawImage(img, 0, 0, 850, 500);

      // 绘制文字
      ctx.fillStyle = "#000";
      ctx.font = "bold 28px sans-serif";
      ctx.fillText(name, 60, 120);

      ctx.font = "20px sans-serif";
      ctx.fillText(title, 60, 160);
      ctx.fillText("T: " + phone, 60, 200);
      ctx.fillText("E-mail: " + email, 60, 240);
      ctx.fillText("Add: " + address, 60, 280);
      ctx.fillText(website, 60, 320);

      const link = document.getElementById("download");
      link.href = canvas.toDataURL("image/png");
      link.style.display = "inline-block";
      link.innerText = "下载名片";
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(bgInput.files[0]);
}
