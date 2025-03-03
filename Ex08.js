const month = Number(prompt("Nhập một tháng bất kỳ (từ 1 đến 12):"));

const mua =
  month >= 1 && month <= 3
    ? "Mùa xuân"
    : month >= 4 && month <= 6
    ? "Mùa hạ"
    : month >= 7 && month <= 9
    ? "Mùa thu"
    : month >= 10 && month <= 12
    ? "Mùa đông"
    : "Tháng không hợp lệ! Vui lòng nhập từ 1 đến 12.";

alert(mua);
