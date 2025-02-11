var x = 10;
var y = 6;
for (var z = 1; z <= x; z++) {
  if (z <= y) {
    console.log("Angkot No. " + z + " beroperasi dengan baik.");
  } else if (z === 8) {
    console.log("Angkot No. " + z + " sedang lembur.");
  } else {
    console.log("Angkot No. " + z + " sedang tidak beroperasi.");
  }
}
