alert("Kalkulator sederhana");
function tambah(a, b) {
  return a + b;
}
function kurang(a, b) {
  return a - b;
}
function bagi(a, b) {
  return b === 0 ? "Tidak dapat membagi dengan nol!" : a / b;
}
function kali(a, b) {
  return a * b;
}

while (true) {
  var a = prompt("Masukkan angka pertama : ");

  if (a === null) {
    alert("terimakasih!");
    break;
  }
  a = parseFloat(a);
  if (isNaN(a)) {
    alert("Input tidak valid! Mohon masukkan angka!");
    continue;
  }

  var op = prompt("Pilih Operator (+, -, *, /)");
  if (op === null) {
    alert("Terimakasih!");
    break;
  }
  if (!["+", "-", "*", "/"].includes(op)) {
    alert("Input tidak valid! Mohon masukkan operator yang tertera!");
    continue;
  }

  var b = prompt("Masukkan angka kedua : ");
  if (b === null) {
    alert("Terimakasih");
    break;
  }
  b = parseFloat(b);
  if (isNaN(b)) {
    alert("Input tidak valid! Mohon masukkan angka!");
    continue;
  }
  var hasil;
  switch (op) {
    case "+":
      hasil = tambah(a, b);
      break;
    case "-":
      hasil = kurang(a, b);
      break;
    case "*":
      hasil = kali(a, b);
      break;
    case "/":
      hasil = bagi(a, b);
      break;
  }
  alert("Hasil dari " + a + op + b + " adalah : " + hasil);
  if (!confirm("Coba lagi??")) {
    alert("Terimakasih!");
    break;
  }
}
