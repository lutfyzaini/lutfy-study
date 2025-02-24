var input = prompt("Masukan sebuah kalimat : ");

function wordCount(input) {
  return input.split(" ").length;
}

alert("Jumlah kata dalam kalimat " + input + " adalah " + wordCount(input));
