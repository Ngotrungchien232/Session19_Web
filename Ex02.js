const char = prompt("Nhập một ký tự: ");

if (
  char.length === 1 &&
  ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z"))
) {
  console.log(`${char} là chữ cái`);
} else {
  console.log(`${char} không phải là chữ cái`);
}
