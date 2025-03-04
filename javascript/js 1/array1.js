var nama = ["Lutfy", "Deny", "Danu", "David", "Dava"];
console.log(nama);
// Menambah 2 nama baru
nama.push("Antares", "Varray");
console.log(nama);
//Hapus nama pertama
nama.shift();
console.log(nama);
// Menyisipkan nama baru di indeks 2
nama.splice(2, 0, "Budi");
console.log(nama);
//array baru yang berisi nama dari array 'nama'
var nama2 = nama.slice(0, 5);
console.log(nama);
console.log(nama2);
