# Các gói (package) sử dụng trong project

Tên Gói (package) | Phiên Bản (version) | Chức Năng
---|---|---
`faker`|4.1.0| Sử dụng để tạo dữ liệu demo
`bcrypt`|3.0.0| Sử dụng để mã hóa, so sánh chuỗi mã hóa login
`body-parser`|1.18.3| Sử dụng để lấy thông tin post form
`connect-flash`|0.1.1| Sử dụng để set session alert
`cookie-parser`|1.4.3| Sử dụng để set cookie
`dotenv`|6.0.0| Sử dụng để đọc file `.env`
`ejs`|2.6.1| View engine templage
`express`|4.16.3| Route website nodejs
`express-session`|1.15.6| n/a
`moment`|2.22.2| Sử dụng để tính toán thời gian
`multer`|1.3.1| Sử dụng để tạo middleware cho upload file
`mysql2`|1.6.1| Sử dụng để kết nối tới MySQL database
`sequelize`|4.38.0| Sử dụng để tạo model tương tác với database
`app-root-path`|2.1.0| Sử dụng để lấy đường dẫn tuyệt đối của project
`axios`|0.18.0| Sử dụng để gửi request (giống như ajax)
`passport`|0.18.0| Sử dụng để login
`passport-local`|0.18.0| Sử dụng để login local

Trên đây là những gói được `install` dưới dạng `--save`, chúng ta cần có thêm package `sequelize-cli` cài ở chế độ `Global` (bắt buộc) để chạy lệnh sequelize

## Khởi chạy dự án

* Clone dự án từ git về local
```sh
# node-final: là tên thư mục chứa code
git clone https://github.com/ducthuan1202/node-final.git node-final
```

* Di chuyển vào thư mục `node-final` của clone về, chọn `git bash here` từ menu chuột phải trong thư mục

* Cài đặt package
```sh
npm install
```

* Nếu thư mục `src/database` trống
```sh
sequelize init
```

## Ghi chú
* file  `.gitkeep` sử dụng để giúp commit được folder trống lên repository và nếu thư mục đó có tên trong file `.gitignore` thì nó được override (sẽ được add và tracking).

## Tạo file .pem
- Save file từ trên đường dẫn [đây](https://raw.githubusercontent.com/anders94/https-authorized-clients/master/keys/ca.cnf) trên trình duyệt với tên `ca.cnf`
- Mở giao diện commanline, chạy lệnh
```sh
openssl req -new -x509 -days 9999 -config ca.cnf -keyout ca-key.pem -out ca-cert.pem
```
=> sẽ tạo ra 2 file `ca-key.pem` và `ca-cert.pem` tại đường dẫn chạy lệnh trên