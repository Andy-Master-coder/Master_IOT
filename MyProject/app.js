const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  
  // HTML chứa bảng danh sách sinh viên
  const html = `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Danh sách Sinh viên</title>
      <style>
        table {
          width: 80%;
          margin: 20px auto;
          border-collapse: collapse;
        }
        th, td {
          border: 1px solid black;
          padding: 8px;
          text-align: left;
        }
        th {
          background-color: #f2f2f2;
        }
      </style>
    </head>
    <body>
      <h1 style="text-align: center;">Danh sách Sinh viên</h1>
      <table>
        <thead>
          <tr>
            <th>MSHV</th>
            <th>Họ tên</th>
            <th>Ngày sinh</th>
            <th>Quê quán</th>
            <th>Email</th>
            <th>SĐT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SV001</td>
            <td>Nguyễn Văn A</td>
            <td>01/01/2000</td>
            <td>Hà Nội</td>
            <td>nguyenvana@gmail.com</td>
            <td>0123456789</td>
          </tr>
          <tr>
            <td>SV002</td>
            <td>Trần Thị B</td>
            <td>15/05/2001</td>
            <td>TP.HCM</td>
            <td>tranb@gmail.com</td>
            <td>0987654321</td>
          </tr>
          <tr>
            <td>SV003</td>
            <td>Lê Văn C</td>
            <td>20/12/1999</td>
            <td>Đà Nẵng</td>
            <td>levanc@gmail.com</td>
            <td>0912345678</td>
          </tr>
        </tbody>
      </table>
    </body>
    </html>
  `;
  
  res.end(html);
});

server.listen(port, () => {
  console.log(`Server running at port ` + port);
});