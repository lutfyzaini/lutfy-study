function Buku(judul, penulis, tahunTerbit, genre, rating) {
  this.judul = judul;
  this.penulis = penulis;
  this.tahunTerbit = tahunTerbit;
  this.genre = genre;
  this.rating = rating;

  this.tampilkanInfo = function () {
    console.log(`Judul : ${this.judul}, Penulis : ${this.penulis}, Tahun : ${this.tahunTerbit}, Genre : ${this.genre}, Rating : ${this.rating}`);

    for (let i = 0; i < this.tampilkanInfo.length; i++) {
      console.log("Buku ke " + " : " + this.tampilkanInfo[i]);
    }
  };

  this.ubahRating = function (ratingBaru) {
    this.rating = ratingBaru;
    console.log(`Rating buku "${this.judul}" telah diperbarui menjadi ${this.rating}`);
  };

  // this.tambahBuku = function (judul, penulis, tahunTerbit, genre, rating) {
  //   this.tambahBuku = new Buku(judul, penulis, tahunTerbit, genre, rating);
  // };
}

var buku1 = new Buku("Esensialism", "Greg Mckeown", 2023, "Self Improvement", "8.5/10");
var buku2 = new Buku("Filosofi Teras", "Henry Manampiring", 2023, "Self Improvement", "9/10");
var buku3 = new Buku("Meditations", "Marcus Aurelius", 2023, "Filsafat", "10/10");
