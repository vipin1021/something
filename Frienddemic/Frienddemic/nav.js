function myFunction() {
    var x = document.getElementById("mytopnav");
    if (x.className === "navtop") {
      x.className += " responsive";
    } else {
      x.className = "navtop";
    }
  }