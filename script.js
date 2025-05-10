body {
  font-family: "Helvetica Neue", sans-serif;
  background: #f5f5fa;
  padding: 20px;
  color: #333;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.container {
  max-width: 900px;
  margin: auto;
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.form {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.form label {
  flex: 1 1 200px;
  font-size: 14px;
}

.form input {
  width: 100%;
  padding: 5px;
  font-size: 14px;
}

button {
  padding: 8px 16px;
  font-size: 14px;
  background: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

canvas {
  display: block;
  margin: 20px auto;
  border: 1px solid #ccc;

  /* 显示缩放预览 */
  width: 100%;
  max-width: 425px; /* 等比例缩放（850px ÷ 2） */
  height: auto;
}

#download {
  display: block;
  margin: 10px auto;
  padding: 6px 12px;
  background-color: #f55;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 14px;
}
