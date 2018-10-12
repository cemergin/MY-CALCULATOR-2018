// Calculation Related functions

function calculateButtonClicked() {
  myNoHint();
  removeCoachMark();
  a = parseInput(getBin1());
  console.log("A " + a);
  b = parseInput(getBin2());
  console.log("B " + b);
  if (isNaN(a)|| isNaN(b)) {
    console.log("Incorrect Input");
    alert("Incorrect Input! Your input should be consisted of 0s and 1s only");
    document.getElementById("result").innerHTML = ""
   }
  else {
  c = selecta(a,b);
  d = (c >>> 0).toString(2);
  console.log(d);
  document.getElementById("result").innerHTML = "Binary Result: " + d + " // " + "Decimal Result " + c;}
}

function selecta(a,b) {
  c = getSelector();
  switch (c) {
    case "+":
    return (a + b);
    break;
    case "-":
    return (a - b);
    break;
    case "x":
    return (a * b);
    break;
    case "/":
    return (a / b);
    break;
    default:
    return (a + b);
  }

}
function getBin1() {
  return document.getElementById("bin1").value;
};
function getBin2() {
  return document.getElementById("bin2").value;
};
function getSelector() {
  return document.getElementById("selector").value;
};

function checkInput(str) {
  for(var i = str.length-1; i>=0; i--){
    if ((str.charAt(i) !== '0') && (str.charAt(i) !== '1')) {
      return false;
    }
  }
  return true;
}

function parseInput(str) {
    if (checkInput(str)) {
      return parseInt(str, 2);
    } else {
    return NaN;}
};

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
    document.getElementById("bin1").addEventListener("mouseover", function() {
      myHint();
    });
    document.getElementById("bin2").addEventListener("mouseover", function() {
      myHint();
    });
    console.log("Input Hints");
  } else {
    return;
  }
};
function OverflowMenus() {
  if (userType >= 4) {
    oth = document.getElementsByClassName("other");
    for (var i = 0; i < oth.length; i++) {
      oth[i].style.display = "none";
    }
    document.getElementById("moreInfo").style.display = "block";
    console.log("Overflow Menus");
  } else
 {return;
 }
}
function Wizard(){
    if (userType === 0 || userType === 1|| userType === 3) {
      // DO SOMETHING
      document.getElementById("convertButton").style.display = "block";
      console.log("Wizard");
    } else {
      return;
    }
}
function CoachMarks() {
  if (userType === 0)
    {
      initialCoachMark();
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
    alert("Please input two binary numbers and click to calculate!");
}

// InputHints Functions

function myHint() {
	document.getElementById("inputhint").innerHTML = "Input should look something like 101011";
}

function myNoHint() {
	document.getElementById("inputhint").innerHTML = " ";
}

// OverflowMenus Functions

function expendOthers() {
    oth = document.getElementsByClassName("other");
    for (var i = 0; i < oth.length; i++) {
      oth[i].style.display = "block";
    }
    document.getElementById("moreInfo").style.display = "none";
}

// Wizard Functions

function expendWizard()
 {
   var coli= document.getElementById("converter");
   if (coli.style.display === 'block') {
     coli.style.display = 'none';
   } else {
    coli.style.display = 'block';}
 }

function convertDecimal(){
  var deci = document.getElementById("bin3");
  var bina = document.getElementById("bin4");
  console.log(deci.value);
  c = deci.value;
  bina.value = (c >>> 0).toString(2);
  console.log(bina.value);
}

// CoachMarks Functions

function initialCoachMark() {
  if (userType === 0) {
  document.getElementById('step1').style.display='block';
  document.getElementById('step2').style.display='none';
  document.getElementById('step3').style.display='none';
}
}

function keyOnInput1() {
    if (userType === 0) {
  document.getElementById('step1').style.display='none';
	document.getElementById('step2').style.display='block';
  document.getElementById('step3').style.display='none';
}
}

function keyOnInput2() {
  if (userType === 0) {
  document.getElementById('step1').style.display='none';
	document.getElementById('step2').style.display='none';
  document.getElementById('step3').style.display='block';
}
}

function removeCoachMark() {
  document.getElementById('step1').style.display='none';
	document.getElementById('step2').style.display='none';
  document.getElementById('step3').style.display='none';
}

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
