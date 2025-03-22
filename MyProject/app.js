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
            <td>M2524018</td>
            <td>Trần Anh Duy</td>
            <td>22/10/1997</td>
            <td>Cần Thơ</td>
            <td>DuyM2524018@gstudent.ctu.edu.vn</td>
            <td>0375955699</td>
          </tr>
          <tr>
            <td>M2524___</td>
            <td>Lê Xuân Tùng</td>
            <td>10/02/1997</td>
            <td>Cần Thơ</td>
            <td>________________</td>
            <td>________________</td>
          </tr>
          <tr>
            <td>M2524___</td>
            <td>Nguyễn Ngọc Nữ</td>
            <td>__/__/____</td>
            <td>Cần Thơ</td>
            <td>________________</td>
            <td>________________</td>
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