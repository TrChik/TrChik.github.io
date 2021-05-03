function display_switcher(class_name) {
  var x = document.getElementById(class_name);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}