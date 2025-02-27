var angka = [1, 4, 7, 9, 10, 20, 30, 33, 40, 50];
console.log("Array awal : ", angka.join(" - "));

// forEach untuk menampilkan setiap angka
console.log("Menampilkan setiap angka : ");
angka.forEach(function (e) {
  console.log(e);
});

// array baru yang nilai 'angka' dikali 2
var angka2 = angka.map(function (e) {
  return e * 2;
});
console.log("Array setelah dikali 2 : ", angka2.join(" - "));

// membuat array baru yang berisi angka lebih dari 25
var angka3 = angka.filter(function (e) {
  return e > 25;
});
console.log("Array angka lebih dari 25 : ", angka3.join(" - "));

// mengurutkan angka dari terkecil ke terbesar
angka.sort(function (a, b) {
  return a - b;
});
console.log("Mengurutkan dari terkecil ke terbesar : ", angka.join(" - "));
