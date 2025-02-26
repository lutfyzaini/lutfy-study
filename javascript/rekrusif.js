function cetakAngka(i) {
  if (i === 0) return;
  console.log(i);
  return cetakAngka(i - 1);
}
cetakAngka(90);
