// Kilometers to Miles Conversion
document.getElementById("convertKmToMilesBtn").addEventListener("click", function () {
    const km = parseFloat(document.getElementById("kilometers").value);
    if (!isNaN(km)) {
      const miles = km * 0.621371;
      document.getElementById("toMiles").value = miles.toFixed(3);
    } else {
      alert("Please enter a valid number of kilometers.");
    }
  });
  
  // Miles to Kilometers Conversion
  document.getElementById("convertMilesToKmBtn").addEventListener("click", function () {
    const miles = parseFloat(document.getElementById("miles").value);
    if (!isNaN(miles)) {
      const km = miles / 0.621371;
      document.getElementById("toKilometers").value = km.toFixed(3);
    } else {
      alert("Please enter a valid number of miles.");
    }
  });
  