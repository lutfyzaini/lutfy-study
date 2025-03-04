var tanya = true;
while (tanya) {
  var comp = Math.floor(Math.random() * 10) + 1;
  alert("Tebak angka dari 1 - 10\nAnda memiliki 3 kesempatan!");

  for (let i = 3; i > 0; i--) {
    var p = parseInt(prompt("Masukkan angka 1 - 10:"));
    if (isNaN(p)) {
      alert("Input bukan angka!");
      i++; // Kembalikan kesempatan karena input tidak valid
      continue;
    }

    if (p === comp) {
      alert("SELAMAT! Jawaban Anda benar: " + comp);
      break;
    } else if (i === 1) {
      alert("Kesempatan habis! Jawabannya adalah: " + comp);
    } else {
      alert((p > comp ? "Terlalu tinggi!" : "Terlalu rendah!") + "\nSisa kesempatan: " + (i - 1));
    }
  }

  tanya = confirm("Main lagi?");
}

alert("Terimakasih telah bermain!");
