const rate = 23000; // Tỷ giá 1 USD = 23,000 VND

const choice = prompt("Chọn loại chuyển đổi:\n1. VND -> USD\n2. USD -> VND");

switch (choice) {
  case "1":
    const vnd = prompt("Nhập số tiền VND: ");
    const usd = vnd / rate;
    alert(`${vnd} VND = ${usd.toFixed(2)} USD`);
    break;

  case "2":
    const usdAmount = prompt("Nhập số tiền USD: ");
    const vndAmount = usdAmount * rate;
    alert(`${usdAmount} USD = ${vndAmount.toLocaleString()} VND`);
    break;

  default:
    alert("Lựa chọn không hợp lệ! Vui lòng chọn 1 hoặc 2");
}
