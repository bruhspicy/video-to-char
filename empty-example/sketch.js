let dog;
let video;
const representation = "N@#W$9876543210?!abc;:+=-,._           ";

// function preload() {
//   dog = loadImage("assets/dog.jpg");
// }

function setup() {
  //createCanvas(500, 500);
  noCanvas();
  video = createCapture(VIDEO);
  video.size(50, 50);
  div = createDiv();
}

function draw() {
  video.loadPixels();
  let asciiImage = "";
  for (let i = 0; i < video.height; ++i) {
    for (let j = 0; j < video.width; ++j) {
      const pixelIndex = (i + j * video.width) * 4;
      let avg =
        (video.pixels[pixelIndex] +
          video.pixels[pixelIndex + 1] +
          video.pixels[pixelIndex + 2]) /
        3;

      noStroke();
      fill(0);

      const charIndex = floor(map(avg, 0, 255, representation.length, 0));

      const c = representation.charAt(charIndex);
      if (c == " ") asciiImage += "&nbsp;";
      else asciiImage += c;
    }
    asciiImage += "<br/>";
  }
  div.html(asciiImage);

  // Enable/disable for dark/light mode
  div.style("color", "white");
}
