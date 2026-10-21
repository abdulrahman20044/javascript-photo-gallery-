
/* Interactive Photo Gallery */

function upDate(previewPic) {
  console.log("Mouse over event triggered");
  console.log("Image alt: " + previewPic.alt);
  console.log("Image source: " + previewPic.src);

  let imageDiv = document.getElementById("image");

  imageDiv.textContent = previewPic.alt;

  imageDiv.style.backgroundImage =
    "url('" + previewPic.src + "')";
}

function unDo() {
  console.log("Mouse leave event triggered");

  let imageDiv = document.getElementById("image");

  imageDiv.style.backgroundImage = "none";

  imageDiv.textContent =
    "Hover over an image below to display here.";
}
