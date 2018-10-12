// User Related Functions

var userType = 0

function setUserType(str) {
  switch(str) {
    case "Naive":
    userType = 0;
    break;
    case "Novice":
    userType = 1;
    break;
    case "Typical":
    userType = 2;
    break;
    case "Casual":
    userType = 3;
    break;
    case "Advanced":
    userType = 4;
    break;
    default:
    userType = 0;
  }
}

function calculateUserType() {
  if(typeof(Storage) !== "undefined") {
    if (localStorage.visitcount && localStorage.lastVisit) {
    if (localStorage.visitcount <= 0) return "Naive";
    if (localStorage.visitcount <= 2) return "Novice";
    if (localStorage.visitcount <= 8) return "Typical";
    if (localStorage.visitcount <= 11) return "Casual";
    if (localStorage.visitcount > 11) return "Advanced";
    }
  else return "Naive";
  }
}

function visitCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.visitcount) {
            localStorage.visitcount = Number(localStorage.visitcount)+1;
        } else {
            localStorage.visitcount = 0;
        }
        document.getElementById("visitcount").innerHTML = "You have visited our website " + localStorage.visitcount + " time(s).";
    } else {
        document.getElementById("visitcount").innerHTML = "Your browser does not support web storage...";
    }
}

function lastVisit() {
  if(typeof(Storage) !== "undefined") {
          var today = new Date();
          localStorage.lastVisit = today;
      document.getElementById("visitdate").innerHTML = "You last visited our website on " + localStorage.lastVisit;
  } else {
      document.getElementById("visitdate").innerHTML = "Your browser does not support web storage...";
  }
}

function resetCounter() {
  if (typeof(Storage) !== "undefined") {
      localStorage.visitcount = -1;
  } else {
      console.log("Browser does not support web storage");
  }
}

// Pattern Control Functions

function HiddenInformation() {
  if (userType >= 2) {
    // DO SOMETHING
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 1; i < coll.length; i++) {
      thiz = coll[i];
      coll[i].classList.toggle("active");
      var content = thiz.nextElementSibling;
      content.style.display = "none";
    }
    console.log("Hidden Information");
  } else {
    return;
  }
};
function ExpendableInputs() {
  if (userType >= 1) {
    // DO SOMETHING
    console.log("Expendable Inputs");
    docu = document.getElementsByClassName("calculator");
    for (var i = 0; i < docu.length; i++) {
      docu[i].style.display = "none";
    }

  } else {
    elmt = document.getElementById("expendCalculator");
    elmt.style.display = "none";
    return;}
};
function Popovers() {
  if (userType >= 2) {
    // DO SOMETHING
    console.log("Popovers");
  }  else {
    return;
  }
};
function InputHints() {
  if (userType === 0 || userType === 1|| userType === 3) {
    // DO SOMETHING
    console.log("Input Hints");
  } else {
    return;
  }
};
function OverflowMenus() {
  if (userType >= 4) {
    // DO SOMETHING
    console.log("Overflow Menus");
  } else
 {return;
 }
}
function Wizard(){
  if (userType === 0 || userType === 1|| userType === 3) {
    // DO SOMETHING
    console.log("Wizard");
  } else {
    return;
  }
}
function CoachMarks() {
  if (userType === 0)
  {
    // DO SOMETHING
    console.log("Coach Marks");
  } else {
    return;
  }
};
function DefaultValue() {
  if (userType >= 2) {
    // DO SOMETHING
    console.log("Default Value");
  } else {
  return;}
};
function CompletenessMeter() {
  if (userType >= 2) {
    // DO SOMETHINS
    console.log("Completeness Meter");
  } else {
    return;
  }
};
function FeaturedContent() {
  if (userType >= 4) {
    // DO SOMETHING
    console.log("Featured Content");
  } else
 {return;
 }
};
function NextSteps() {
if (userType === 2 || userType === 4) {
  // DO SOMETHING
  console.log("Next Steps");
} else {
  return;
}
};

// HiddenInformation Functions

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

// ExpendableInputs Functions

function expendCalculator() {
  col = document.getElementsByClassName("calculator");
  for (var i = 0; i < col.length; i++){

    if (col[i].style.display === 'block') {
      col[i].style.display = 'none';
      document.getElementById("expendCalculator").textContent= "Show Calculator";
    }
    else {
      col[i].style.display='block';
      document.getElementById("expendCalculator").textContent = "Hide Calculator";}
  }
  if (userType < 2) {
document.getElementById("PopoverButton").style.display = 'none';
}
}

// Popoevers Functions

function myPopover() {
    alert("Please input two binary numbers and clicks calculate!");
}

// InputHints Functions

// OverflowMenus Functions

// Wizard Functions

// CoachMarks Functions

// DefaultValue Functions

// CompletenessMeter Functions

// FeaturedContent Functions

// Event Listeners



// Load Event Listener

window.addEventListener("load", function() {
  visitCounter();
  lastVisit();
  type = calculateUserType();
  setUserType(type);
  document.getElementById("visitortype").innerHTML = "Visiter Type: " + type + " // " + userType;
  HiddenInformation();
  ExpendableInputs();
  Popovers();
  InputHints();
  OverflowMenus();
  Wizard();
  CoachMarks();
  DefaultValue();
  CompletenessMeter();
  FeaturedContent();
  NextSteps();
});
