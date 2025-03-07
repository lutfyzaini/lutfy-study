alert("Kalkulator sederhana");

while (true) {
  // Angka pertama
  var a = prompt("Masukkan angka pertama : ");
  if (a === null) {
    alert("Terimakasih");
    break;
  }
  a = parseInt(a);
  if (isNaN(a)) {
    alert("Input yang dimasukkan tidak valid! Harap masukkan angka");
    continue;
  }
  // Operator
  var op = prompt("Pilih operator ( +, -, *, / )");
  if (op === null) {
    alert("Terimakasih");
    break;
  }
  if (!["+", "-", "*", "/"].includes(op)) {
    alert("Input yang dimasukkan tidak valid! Harap masukkan sesuai operator yang tertera");
    continue;
  }

  // Angka kedua

  var b = prompt("Masukkan angka kedua : ");
  if (b === null) {
    alert("Terimakasih");
    break;
  }
  b = parseInt(b);
  if (isNaN(b)) {
    alert("Input yang dimasukkan tidak valid! Harap masukkan angka");
    continue;
  }

  // Proses
  var hasil = "";
  switch (op) {
    case "+":
      hasil = a + b;
      break;
    case "-":
      hasil = a - b;
      break;
    case "*":
      hasil = a * b;
      break;
    case "/":
      hasil = a / b;
      break;
  }

  alert("Hasil dari " + a + op + b + " adalah : " + hasil);

  if (!confirm("Coba lagi?")) {
    alert("Terimakasih");
    break;
  }
}
