const a = prompt("Nhập hệ số a: ");
const b = prompt("Nhập hệ số b: ");
const c = prompt("Nhập hệ số c: ");

const aNum = Number(a);
const bNum = Number(b);
const cNum = Number(c);

if (aNum === 0) {
  alert("Không phải phương trình bậc 2 (a phải khác 0");
} else {
  const delta = bNum * bNum - 4 * aNum * cNum;

  if (delta > 0) {
    const x1 = (-bNum + Math.sqrt(delta)) / (2 * aNum);
    const x2 = (-bNum - Math.sqrt(delta)) / (2 * aNum);
    alert(`Phương trình có 2 nghiệm: x1 = ${x1}, x2 = ${x2}`);
  } else if (delta === 0) {
    const x = -bNum / (2 * aNum);
    alert(`Phương trình có nghiệm kép: x = ${x}`);
  } else {
    alert("Phương trình vô nghiệm");
  }
}
