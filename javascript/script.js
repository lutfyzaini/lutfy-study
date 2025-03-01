var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  // Jika angkot kosong
  if (penumpang.length == 0) {
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      } else if (penumpang[i] == namaPenumpang) {
        console.log(namaPenumpang + "SUDAH ADA DI DALAM ANGKOT");
        return penumpang;
      } else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length === 0) {
    console.log("ANGKOT MASIH KOSONG!");
  } else {
    for (let k = 0; k < penumpang.length; k++) {
      if (penumpang[k] == namaPenumpang) {
        penumpang[k] = undefined;
      } else if (k == penumpang.length - 1) {
        console.log(namaPenumpang + " tidak ada dalam daftar penumpang");
      }
    }
  }
  return penumpang;
};
