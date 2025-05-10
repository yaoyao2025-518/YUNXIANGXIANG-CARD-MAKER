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

      // 设置名片实际尺寸：85mm × 50mm（单位为像素，假设 10px/mm）
      canvas.width = 850;
      canvas.height = 500;

      // 清空画布并绘制背景图
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // 设置文本样式
      ctx.fillStyle = "#000";
      ctx.textAlign = "left"; // 强制从左对齐

      // 姓名（大字，霞鹜文楷加粗）
      ctx.font = "bold 32px 'LXGW WenKai Screen', sans-serif";
      ctx.fillText(name, 60, 110);

      // 其他信息（普通字号，Helvetica）
      ctx.font = "20px Helvetica, sans-serif";
      ctx.fillText(title, 60, 150);
      ctx.fillText("T: " + phone, 60, 190);
      ctx.fillText("E-mail: " + email, 60, 230);
      ctx.fillText("Add: " + address, 60, 270);
      ctx.fillText(website, 60, 310);

      // 显示下载链接
      const link = document.getElementById("download");
      link.href = canvas.toDataURL("image/png");
      link.style.display = "inline-block";
      link.innerText = "下载名片";
    };
    img.src = e.target.result;
  };

  reader.readAsDataURL(bgInput.files[0]);
}
