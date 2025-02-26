function cetakAngka(i) {
  console.log(i);
  if (i === 0) return 1;
  return i * cetakAngka(i - 1);
}

console.log(cetakAngka(5));
