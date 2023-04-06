// Set up variables
let points = 0;
let clickMultiplier = 10000;
let autoclickpoints = 1000;
let autoClickerRate = 1000; // in milliseconds
const hargaTahu = 100000;
const hargaRisol = 200000;
const hargaCakwe = 300000;

let autoTahu = 1000000;
let multiTahu = 500000;
let autoRisol = 2000000;
let multiRisol = 2500000;
let autoCakwe = 3000000;
let multiCakwe = 4000000;
let autoTahuIsi = 500000;
let multiTahuIsi = 1000000;
let priceAuto = 1000;
let x = 1;
let y = 1;
let a = 1;
let z = 1;
let TF = 0;
let TFTI = 0;
let TFR = 0;
let TFC = 0;

function showPopup() {
  document.getElementById("popup").style.display = "block";
}
function hidePopup() {
  document.getElementById("popup").style.display = "none";
}

document.getElementById("T").addEventListener("click", function () {
  points = points + 10000 * x;
  document.getElementById("points").innerHTML = points;
});

document.getElementById("TI").addEventListener("click", function () {
  points = points + 30000 * y;
  document.getElementById("points").innerHTML = points;
});

document.getElementById("R").addEventListener("click", function () {
  points = points + 50000 * a;
  document.getElementById("points").innerHTML = points;
});

document.getElementById("C").addEventListener("click", function () {
  points = points + 75000 * z;
  document.getElementById("points").innerHTML = points;
});

document.getElementById("tahu").addEventListener("click", function () {
  if (points < hargaTahu - 1) {
    alert("Duit Tidak Cukup");
  } else {
    points -= hargaTahu;
    clickMultiplier += hargaTahu;
    document.getElementById("jualTahu").style.visibility = "hidden";
    document.getElementById("points").innerHTML = points;
    document.getElementById("tahuisi").style.visibility = "visible";
  }
});

document.getElementById("risol").addEventListener("click", function () {
  if (points < hargaRisol - 1) {
    alert("Duit Tidak Cukup");
  } else {
    points -= hargaRisol;
    clickMultiplier += hargaRisol;
    document.getElementById("jualRisol").style.visibility = "hidden";
    document.getElementById("points").innerHTML = points;
    document.getElementById("risol2").style.visibility = "visible";
  }
});
document.getElementById("cakwe").addEventListener("click", function () {
  if (points < hargaCakwe - 1) {
    alert("Duit Tidak Cukup");
  } else {
    points -= hargaCakwe;
    clickMultiplier += hargaCakwe;
    document.getElementById("jualCakwe").style.visibility = "hidden";
    document.getElementById("points").innerHTML = points;
    document.getElementById("cakwe2").style.visibility = "visible";
  }
});

//Auto tahu
document.getElementById("autoClick").addEventListener("click", function () {
  document.getElementById("priceAuto").innerHTML = priceAuto;
  if (TF < 5) {
    if (points < priceAuto - 1) {
      alert("Duit Tidak Cukup");
    } else {
      points -= priceAuto;
      document.getElementById("points").innerHTML = points;
      priceAuto += 5000;
      document.getElementById("priceAuto").innerHTML = priceAuto;
      setInterval(function () {
        points += autoclickpoints;
        document.getElementById("points").innerHTML = points;
      }, autoClickerRate);
    }
    TF++;
  } else if (TF >= 5) {
    document.getElementById("autoClick").style.visibility = "hidden";
    document.getElementById("CostautoT").style.visibility = "hidden";
  }
});

//Auto tahu isi
document.getElementById("autoTI").addEventListener("click", function () {
  document.getElementById("priceTI").innerHTML = autoTahuIsi;
  if (TFTI < 5) {
    if (points < autoTahuIsi - 1) {
      alert("Duit Tidak Cukup");
    } else {
      points -= autoTahuIsi;
      document.getElementById("points").innerHTML = points;
      autoTahuIsi += 100000;
      document.getElementById("priceTI").innerHTML = autoTahuIsi;
      setInterval(function () {
        points += autoclickpoints;
        document.getElementById("points").innerHTML = points;
      }, autoClickerRate);
    }
    TFTI++;
  } else if (TFTI >= 5) {
    document.getElementById("autoTI").style.visibility = "hidden";
    document.getElementById("CostautoTI").style.visibility = "hidden";
  }
});

//Auto risol
document.getElementById("autoR").addEventListener("click", function () {
  document.getElementById("priceR").innerHTML = autoRisol;
  if (TFR < 5) {
    if (points < autoRisol - 1) {
      alert("Duit Tidak Cukup");
    } else {
      points -= autoRisol;
      document.getElementById("points").innerHTML = points;
      autoRisol += 250000;
      document.getElementById("priceR").innerHTML = autoRisol;
      setInterval(function () {
        points += autoclickpoints;
        document.getElementById("points").innerHTML = points;
      }, autoClickerRate);
    }
    TFR++;
  } else if (TFR >= 5) {
    document.getElementById("autoR").style.visibility = "hidden";
    document.getElementById("CostautoR").style.visibility = "hidden";
  }
});

//Auto cakwe
document.getElementById("autoC").addEventListener("click", function () {
  document.getElementById("priceC").innerHTML = autoCakwe;
  if (TFC < 5) {
    if (points < autoCakwe - 1) {
      alert("Duit Tidak Cukup");
    } else {
      points -= autoCakwe;
      document.getElementById("points").innerHTML = points;
      autoCakwe += 500000;
      document.getElementById("priceC").innerHTML = autoCakwe;
      setInterval(function () {
        points += autoclickpoints;
        document.getElementById("points").innerHTML = points;
      }, autoClickerRate);
    }
    TFC++;
  } else if (TFC >= 5) {
    document.getElementById("autoC").style.visibility = "hidden";
    document.getElementById("CostautoC").style.visibility = "hidden";
  }
});

//MULTI
document.getElementById("multiT").addEventListener("click", function () {
  document.getElementById("MpriceT").innerHTML = multiTahu;
  if (points < multiTahu) {
    alert("Duit Tidak Mencukupi");
  } else if (points >= multiTahu) {
    if (x <= 5) {
      x++;
    } else if (x >= 5) {
      document.getElementById("multiT").style.visibility = "hidden";
      document.getElementById("CostmultiT").style.visibility = "hidden";
    }
    points -= multiTahu;
    document.getElementById("points").innerHTML = points;
    multiTahu += 250000;
    document.getElementById("MpriceT").innerHTML = multiTahu;
  }
});

document.getElementById("multiTI").addEventListener("click", function () {
  document.getElementById("MpriceTI").innerHTML = multiTahuIsi;
  if (points < multiTahuIsi) {
    alert("Duit Tidak Mencukupi");
  } else if (points >= multiTahuIsi) {
    if (y <= 5) {
      y++;
    } else if (y >= 5) {
      document.getElementById("multiTI").style.visibility = "hidden";
      document.getElementById("CostmultiTI").style.visibility = "hidden";
    }
    points -= multiTahuIsi;
    document.getElementById("points").innerHTML = points;
    multiTahuIsi += 500000;
    document.getElementById("MpriceTI").innerHTML = multiTahuIsi;
  }
});

document.getElementById("multiR").addEventListener("click", function () {
  document.getElementById("MpriceR").innerHTML = multiRisol;
  if (points < multiRisol) {
    alert("Duit Tidak Mencukupi");
  } else if (points >= multiRisol) {
    if (a <= 5) {
      a++;
    } else if (a >= 5) {
      document.getElementById("multiR").style.visibility = "hidden";
      document.getElementById("CostmultiR").style.visibility = "hidden";
    }
    points -= multiRisol;
    document.getElementById("points").innerHTML = points;
    multiRisol += 1000000;
    document.getElementById("MpriceR").innerHTML = multiRisol;
  }
});

document.getElementById("multiC").addEventListener("click", function () {
  document.getElementById("MpriceC").innerHTML = multiCakwe;
  if (points < multiCakwe) {
    alert("Duit Tidak Mencukupi");
  } else if (points >= multiCakwe) {
    if (z <= 5) {
      z++;
    } else if (z >= 5) {
      document.getElementById("multiC").style.visibility = "hidden";
      document.getElementById("CostmultiC").style.visibility = "hidden";
    }
    points -= multiCakwe;
    document.getElementById("points").innerHTML = points;
    multiCakwe += 2000000;
    document.getElementById("MpriceC").innerHTML = multiCakwe;
  }
});
