function myFunction(id) {
	var x = document.getElementsByClassName("standard");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	var y = document.getElementById(id);
	y.style.display = "block";
}