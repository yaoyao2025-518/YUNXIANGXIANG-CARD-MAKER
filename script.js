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

      // 设置画布尺寸为 85x50mm（即850x500px）
      canvas.width = 850;
      canvas.height = 500;

      // 清除画布并绘制背景图
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // 统一文字样式
      ctx.fillStyle = "#000";

      // 姓名：加粗大号
      ctx.font = "bold 28px sans-serif";
      ctx.fillText(name, 80, 120);

      // 其他信息：正常字体
      ctx.font = "20px sans-serif";
      ctx.fillText(title, 80, 160);
      ctx.fillText("T: " + phone, 80, 200);
      ctx.fillText("E-mail: " + email, 80, 240);
      ctx.fillText("Add: " + address, 80, 280);
      ctx.fillText(website, 80, 320);

      // 启用下载按钮
      const link = document.getElementById("download");
      link.href = canvas.toDataURL("image/png");
      link.style.display = "inline-block";
      link.innerText = "下载名片";
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(bgInput.files[0]);
}
