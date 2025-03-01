// Membuat object
// this

// // cara - 1 - function declaration
// function halo() {
//   console.log(this));
//   console.log("Halo");
// }
// this.halo();

// this mengembalikan object Global

// // cara - 2 - object literal
// var obj = { a: 10, nama: "Lutpi" };
// obj.halo = function () {
//   console.log(this);
//   console.log("Halo");
// };
// obj.halo();

// this mengembalikan object yang bersangkutan

// cara - 3 - constructor
function Halo() {
  console.log(this);
  console.log("Halo");
}
var obj1 = new Halo();
var obj2 = new Halo();
// this mengembalikan object yang baru dibuat