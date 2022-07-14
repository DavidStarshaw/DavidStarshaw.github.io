function showStandard(id) {
	var x = document.getElementsByClassName("standard");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	var y = document.getElementById(id);
	y.style.display = "block";
}

function readMore() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readMoreButton");

  if (more.style.display === "inline") {
    moreText.style.display = "none";
    btnText.innerHTML = "...read more"; 
  }
  else {
    moreText.style.display = "inline";
    btnText.innerHTML = "...read less"; 
  }
}