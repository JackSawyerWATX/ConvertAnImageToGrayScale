// var img = new SimpleImage();
var canvas = document.getElementById("can1");
var fileinput = document.getElementById("finput");
var image;

function upload() {
  image = new SimpleImage(fileinput);
  var filename = fileinput.value;
  alert("Verify: " + filename);
  image.drawTo(canvas);
}

function makeGray() {
  var imgCanvas = document.getElementById("can2");
  for (var pixel of image.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  image.drawTo(imgCanvas);
}
