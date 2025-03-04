// var ulang = true;
while (true) {
  var input = prompt("Masukan sebuah kalimat : ") || "";
  if (input === null || input.trim() === "") {
    alert("Terimakasih!");
    break;
  } else if (input.trim() === "") {
    alert("Input tidak boleh kosong");
    continue;
  } else {
    function wordCount(input) {
      return input.trim() === "" ? 0 : input.trim().split(/\s+/).length;
    }

    alert("Jumlah kata dalam kalimat '" + input + "' adalah " + wordCount(input));
    // ulang = confirm("Coba lagi?");
    if (!confirm("Coba lagi?")) {
      alert("Terimakasih!");
      break;
    }
  }
}
