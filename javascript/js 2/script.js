var nama = prompt("Masukkan nama : ").trim();
var umur = prompt("Masukkan umur : ").trim();

if (umur < 18) {
  alert(`Halo, ${nama} Kamu masih remaja.`);
} else {
  alert(`Halo, ${nama} Selamat datang di dunia dewasa.`);
}
