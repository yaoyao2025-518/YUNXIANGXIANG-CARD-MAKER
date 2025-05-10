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

      canvas.width = 850;
      canvas.height = 500;

      // 清空并绘制背景图
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

     // 文字颜色和左对齐
ctx.fillStyle = "#000";
ctx.textAlign = "left";

const offsetY = 150; // 👈 控制整体向下的偏移距离（更新为 150）

// 姓名使用霞鹜文楷加粗
ctx.font = "bold 32px 'LXGW WenKai', sans-serif";
ctx.fillText(name, 60, 110 + offsetY); // 姓名

// 其他信息使用 Helvetica 正常体
ctx.font = "20px Helvetica, sans-serif";
ctx.fillText(title, 60, 150 + offsetY);
ctx.fillText("T: " + phone, 60, 190 + offsetY);
ctx.fillText("E-mail: " + email, 60, 230 + offsetY);
ctx.fillText("Add: " + address, 60, 270 + offsetY);
ctx.fillText(website, 60, 310 + offsetY);

      // 下载按钮激活
      const link = document.getElementById("download");
      link.href = canvas.toDataURL("image/png");
      link.style.display = "inline-block";
      link.innerText = "下载名片";
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(bgInput.files[0]);
}
