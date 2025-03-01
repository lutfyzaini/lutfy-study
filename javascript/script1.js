// Mebuat object
// Object literal
var mhs = {
  nama: "Lutfy",
  nrp: "12312313",
  email: "wasdwasd@sinus.ac.id",
  jurusan: "Informatika",
};
var mhs1 = {
  nama: "Zaini",
  nrp: "154545413",
  email: "wlkjkljkasd@sinus.ac.id",
  jurusan: "Informatika",
};

// Function Declaration
function buatObjectMhs(nama, nrp, email, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.nrp = nrp;
  mhs.email = email;
  mhs.jurusan = jurusan;

  return mhs;
}

var mhs3 = buatObjectMhs("Toni", "878786690", "tonisa@sinus.ac.id", "Sistem Informasi");

// Constructor
function Mahasiswa(nama, nrp, email, jurusan) {
  this.nama = nama;
  this.nrp = nrp;
  this.email = email;
  this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa("Dapa", "73738493", "daoasdafa@sinus.ac.id", "Sistem Informasi");
