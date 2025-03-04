var x = 10;
var y = 6;
for (var z = 1; z <= x; z++) {
  if (z <= y && z !== 5) {
    console.log("Angkot No. " + z + " beroperasi dengan baik.");
  } else if (z === 8 || z === 10 || z === 5) {
    console.log("Angkot No. " + z + " sedang lembur.");
  } else {
    console.log("Angkot No. " + z + " sedang tidak beroperasi.");
  }
}
