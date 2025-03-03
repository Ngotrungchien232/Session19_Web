let result = "javascript" + 5;
// Kết quả: "javascript5"
// Giải thích: Dùng dấu + với chuỗi thì nối chuỗi với số, ra chuỗi mới
let result = "javascript" - 1;
// Kết quả: NaN
// Giải thích: Dùng dấu - với chuỗi không phải số sẽ ra NaN (Not a Number)
let result = "3" + 2;
// Kết quả: "32"
// Giải thích: Dấu + với chuỗi và số sẽ nối thành chuỗi mới
let kết_quả = "5" - 4;
// Kết quả: 1
// Giải thích: Dấu - sẽ ép kiểu chuỗi thành số nếu có thể, nên "5" - 4 = 1
let result = isNaN("123");
// Kết quả: false
// Giải thích: "123" là chuỗi số hợp lệ, không phải NaN, nên kết quả là false
let result = isNaN("xin chào");
// Kết quả: true
// Giải thích: "xin chào" không phải số, không chuyển thành số được, nên là NaN
let result = Number.isNaN("123");
// Kết quả: false
// Giải thích: "123" là chuỗi, nhưng Number.isNaN không ép kiểu, nên không phải NaN
let result = Number.isNaN(NaN);
// Kết quả: true
// Giải thích: NaN đúng là giá trị NaN, nên Number.isNaN trả về true
