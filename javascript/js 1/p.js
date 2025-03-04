var repeat = true;
while (repeat) {
  var comp = Math.floor(Math.random() * 10) + 1;

  alert("SELAMAT DATANG!! \nDigame Tebak Angka...");

  for (let i = 3; i > 0; i--) {
    var p = prompt("Masukkan angka 1 - 10\nAnda memiliki kesempatan " + i + " kali");
    if (p == comp) {
      alert("SELAMAT!!, Jawaban anda benar : " + comp);
      break;
    } else if (i === 1) {
      alert("ANDA GAGAL!!!, Kesempatan anda telah habis\nJAWABANNYA ADALAH : " + comp);
    } else if (p > 10) {
      alert("Yang anda masukkan lebih dari 10, ANDA GAGAL!!");
      break;
    } else if (isNaN(p)) {
      alert("YANG ANDA MASUKKAN BUKAN ANGKA!!");
      i++;
      continue;
    } else {
      alert((p > comp ? "TERLALU TINGGI!" : "TERLALU RENDAH!") + "\nSisa Kesempatan : " + (i - 1));
    }
  }
  repeat = confirm("Lagi??");
}
alert("Terimakasih telah bermain!!!");
