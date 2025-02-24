// var coba = "aku adalah lutpi";
// function cek(input) {
//   return input.length;
// }

// console.log(cek(coba));
var ulang = true;
while (ulang) {
  var input = prompt("Masukkan kata untuk mengecek Palindrome : ");

  function palindromeCheck(input) {
    input = input.toLowerCase().replace(/[^a-z0-9]/g, "");
    let p = input.length - 1;
    for (let i = 0; i < input.length / 2; i++) {
      if (input[i] != input[p]) {
        return false;
      }
      p--;
    }
    return true;
  }

  alert("Apakah kata " + input + " adalah Palindrome? " + (palindromeCheck(input) ? "Ya" : "Tidak"));

  ulang = confirm("Ingin mengecek lagi ?");
}
alert("Terimakasih!");
