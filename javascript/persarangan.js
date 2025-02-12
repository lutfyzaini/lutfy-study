var x = "";

for (var i = 10; i > 0; i--) {
  for (var s = 0; s < i; s++) {
    x += "*";
  }
  x += "\n";
}
console.log(x);
