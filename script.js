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

      canvas.width = 850;  // 85mm × 10
      canvas.height = 500; // 50mm × 10

      // 清除画布并绘制背景图
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // 设置统一字体样式
      ctx.fillStyle = "#000";
      ctx.font = "bold 28px sans-serif";
      ctx.fillText(name, 250, 100); // 姓名位置

      ctx.font = "20px sans-serif";
      ctx.fillText(title, 250, 140); // 职务
      ctx.fillText("T: " + phone, 250, 180);
      ctx.fillText("E-mail: " + email, 250, 220);
      ctx.fillText("Add: " + address, 250, 260);
      ctx.fillText(website, 250, 300);

      // 显示下载按钮
      const link = document.getElementById("download");
      link.href = canvas.toDataURL("image/png");
      link.style.display = "inline-block";
      link.innerText = "下载名片";
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(bgInput.files[0]);
}
