 "use strict";


document.addEventListener("mousemove",function(e){

	let div = document.createElement("div");
	div.classList.add("point");
	document.body.appendChild(div);

	div.style.top = e.clientY + "px";
	div.style.left = e.clientX + "px";
})