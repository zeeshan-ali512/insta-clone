var toggle_btn = document.querySelector(".slider");
var body = document.querySelector(".active");
toggle_btn.addEventListener("click", function () {
  if (body.style.backgroundColor == "grey") {
    body.style.backgroundColor = "white";
  } else {
    body.style.backgroundColor = "grey";
  }
});
