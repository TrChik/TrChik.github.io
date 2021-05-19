function menuswitch() {
  var x = document.getElementById("navmenu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function searchbar() {
  var input, filter, table, tr, th, i, txtvalue;
  input = document.getElementById("input1");
  filter = input.value.toLowerCase();
  table = document.getElementById("table1");
  tr = table.getElementsByTagName("tr");
  for(i = 0; i < tr.length; i = i + 2){
    th = tr[i].getElementsByTagName("th")[0];
    if(th) {
      txtvalue = th.textContent || th.innerText;
      if(txtvalue.toLowerCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        tr[i+1].style.display = "";
      } else {
        tr[i].style.display = "none";
        tr[i+1].style.display = "none";
      }
    }
  }
}