var iden = [
  { name: "Lutfy", umur: "18" },
  { name: "Danu", umur: "22" },
  { name: "Caroline", umur: "23" },
  { name: "Varray", umur: "25" },
  { name: "Valen", umur: "18" },
];

// Mengurutkan nama
var nama = iden.map((iden) => iden.name);
console.log("Nama :", nama.join(" - "));

//Umur lebih dari 20
var umur = iden.filter((iden) => iden.umur > 20).map((item) => `${item.name} (${item.umur})`);
console.log("Umur diatas 20 : ", umur.join(", "));

//Umur dari termuda ke tua
var umurTua = iden.sort((a, b) => a.umur - b.umur).map((iden) => `${iden.name} (${iden.umur})`);
console.log("Umur dari termuda ke tua : ", umurTua.join(", "));
