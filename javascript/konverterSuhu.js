var ulang = true;
while (ulang) {
  function celciusToFahrenheit(celcius) {
    return (celcius * 1.8 + 32).toFixed(2);
  }

  function fahrenheitToCelcius(fahrenheit) {
    return ((fahrenheit - 32) / 1.8).toFixed(2);
  }

  function celciusToKelvin(celcius) {
    return (celcius + 273.15).toFixed(2);
  }

  function fahrenheitToKelvin(fahrenheit) {
    return ((fahrenheit - 32) / 1.8 + 273.15).toFixed(2);
  }
  function kelvinToCelcius(kelvin) {
    return (kelvin - 273.15).toFixed(2);
  }
  function kelvinToFahrenheit(kelvin) {
    return ((kelvin - 273.15) * 1.8 + 32).toFixed(2);
  }

  //input
  var p = prompt("Pilih jenis konversi : \n1.Celcius ke Fahrenheit\n2. Celcius ke Kelvin\n3. Fahrenheit ke Celcius\n4. Fahrenheit ke Kelvin\n5. Kelvin ke Celcius\n6. Kelvin ke Fahrenheit");

  p = parseFloat(p);
  if (p >= 1 && p <= 6) {
    var input = prompt("Masukkan Suhu : ");
    input = parseFloat(input);

    if (!isNaN(input)) {
      var hasil;
      switch (p) {
        case 1:
          hasil = celciusToFahrenheit(input) + "°F";
          break;
        case 2:
          hasil = celciusToKelvin(input) + "K";
          break;
        case 3:
          hasil = fahrenheitToCelcius(input) + "°C";
          break;
        case 4:
          hasil = fahrenheitToKelvin(input) + "K";
          break;
        case 5:
          hasil = kelvinToCelcius(input) + "°C";
          break;
        case 6:
          hasil = kelvinToFahrenheit(input) + "°F";
          break;
      }
      alert("Hasil Konversi : " + hasil);
    } else {
      alert("Masukkan angka yang valid");
    }
  } else {
    alert("Pilihan tidak valid!");
  }
  ulang = confirm("Lagi ?");
}

alert("Terimakasih!");
