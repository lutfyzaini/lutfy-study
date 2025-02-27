//Manipulasi array

//1. Menambah isi array
// var arr = [];

// arr[0] = "Lutfy";
// arr[1] = "Zaini";
// arr[2] = "Al";
// arr[3] = "Fath";
// arr[4] = "Toni";

// console.log(arr);

//2. Menghapus isi array
// var arr = ["Lutfy", "Zaini", "AlFathoni"];
// arr[1] = undefined;
// console.log(arr);

//3. Menampilkan array
// var arr = ["Lutfy", "Zaini", "AlFathoni", "Galih"];
// for (let i = 0; i < arr.length; i++) {
//   console.log("Mahasiswa ke - " + (i + 1) + " : " + arr[i]);
// }

// Method pada array
// 1. Join

//

// 2. Push & pop
// arr.push("Lutoi", "Antares");
// arr.pop();
// arr.pop();

// 3. Unshift & shift
// arr.unshift("Lutoi");
// arr.shift();

// 4. Splice
//  splice(indexAwal, mauDihapusBerapa, ElemenBaru1, ElemenBaru2...)

// arr.splice(1, 2, "Doni", "Nadine");

// 5. Slice
// slice(awal, akhir);
// var arr = ["Lutfy", "Zaini", "AlFathoni", "Galih", "Reno"];
// var arr2 = arr.slice(2, 3);

// console.log(arr.join(" - "));
// console.log(arr2.join(" - "));

// 6. Foreeach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var nama = ["Lutfy", "Zaini", "AlFathoni", "Galih", "Reno"];

// // for (let i = 0; i < angka.length; i++) {
// //   console.log(angka[i]);
// // }

// // angka.forEach(function (e) {
// //   console.log(e);
// // });
// nama.forEach(function (e, i) {
//   console.log("Mahasiswa ke - " + (i + 1) + " adalah : " + e);
// });

// 7. Map
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var angka2 = angka.map(function (e) {
//   return e * 2;
// });
// console.log(angka2.join(" - "));

// 8. Sort
// var angka = [1, 20, 2, 9, 5, 6, 3, 10, 4, 7, 8];
// angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka.join(" - "));

// 9. Filter
var angka = [1, 20, 2, 9, 5, 6, 3, 10, 4, 7, 8];
var angka2 = angka.filter(function (x) {
  return x > 5;
});

console.log(angka2.join(" - "));
