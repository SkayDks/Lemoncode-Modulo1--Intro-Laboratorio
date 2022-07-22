function load() {
  let name = "Tony";
  let lastName = "Torres";

  document.getElementById("name").value = name;
  document.getElementById("lastName").value = lastName;
  document.getElementById("avatar").src =
    "./img/man-avatar-icon-free-vector.jpg";

  document.getElementById("update").onclick = viewName;
  
}

function viewName() {
  console.log(document.getElementById("name").value);
}
window.onload = load;
