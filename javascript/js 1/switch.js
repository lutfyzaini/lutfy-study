var x = prompt("masukkan nama makanan/minuman : \n (cth : nasi, daging, susu, hamburger, softdrink");

switch (x) {
  case "nasi":
  case "daging":
  case "susu":
    alert("makanan/minuman SEHAT");
    break;
  case "hamburger":
  case "softdrink":
    alert("makanan/minuman TIDAK SEHAT");
    break;
  default:
    alert("anda memasukkan nama makanan/minuman yang salah!");
    break;
}
