var tanya = true;
while (tanya) {
  var comp = Math.floor(Math.random() * 10) + 1;
  //   var nyawa = 3;
  var hasil = "";
  alert("Tebak angka dari 1 - 10\nAnda memiliki 3 kesempatan untuk menjawab!");

  var p = prompt("Masukkan angka 1 - 10!!");
  for (let i = 3; i > 0; i--) {
    if (p == comp) {
      hasil = "SELAMAT JAWABAN ANDA BENAR";
    } else if (p > comp) {
      hasil = "TERLALU TINGGI!!\nsisa kesempatan : " + i;
    } else if (p < comp) {
      hasil = "TERLALU RENDAH!!\nsisa kesempatan : " + i;
    }
  }

  tanya = confirm("lagi?");
}
alert("Terimakasih telah bermain");
console.log(comp);
