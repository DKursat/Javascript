function onClick() {
    console.log("geclickt");
    document.getElementById('Money').value = document.getElementById('euro').value * 0.99;
    
    console.log(document.getElementById('euro').value)
  }