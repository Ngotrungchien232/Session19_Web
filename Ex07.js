const a = Number(prompt("Nhập số thứ nhất "));
const b = Number(prompt("Nhập số thứ hai "));
const c = Number(prompt("Nhập số thứ ba:"));

const max = a > b ? (a > c ? a : c) : b > c ? b : c;

alert(`Số lớn nhất là: ${max}`);
