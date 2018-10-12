function loadCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.loadcount) {
            localStorage.loadcount = Number(localStorage.loadcount)+1;
        } else {
            localStorage.loadcount = 1;
        }
        document.getElementById("result").innerHTML = "You have visited our website " + localStorage.loadcount + " time(s).";
    } else {
        document.getElementById("result").innerHTML = "Your browser does not support web storage...";
    }
}

function expendCalculator() {
  col = document.getElementsByClassName("calculator");
  for (var i = 0; i < col.length; i++){

    if (col[i].style.display === 'block') {
      col[i].style.display = 'none';
      document.getElementById("expendCalculator").textContent= "Show Calculator";
    }
    else {
      col[i].style.display='block';
      document.getElementById("expendCalculator").textContent = "Hide Calculator";
    }
  }
}

var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var coll2 = document.getElementsByClassName("calculator");

for (var i = 0; i < coll.length; i++) {
  coll2[i].addEventListener("mouseover", function() {

  });
}



window.addEventListener("load", function(event) {
  main = document.getElementById("calc");
  main.style.display = "block";
  loadCounter()
});

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
