



// 2
document.getElementById("ele2").addEventListener("click", function () {
  if (this.src.includes("logo1.png")){
    this.src = "assets/img/logo1-unbrand.png";
  } else {
    this.src = "assets/img/logo1.png";
  }
});

// 3
let ele3 = document.querySelector("#ele3");
ele3.addEventListener("click", function () {
  if (this.src.includes("logo1.png")){
    this.src = "assets/img/logo1-unbrand.png";
  } else {
    this.src = "assets/img/logo1.png";
  }
});

// 4
let ele4 = document.querySelector("#ele4");
ele4.addEventListener("mouseover", function () {
  this.src = "assets/img/logo1-unbrand.png";
});
ele4.addEventListener("mouseout", function () {
  this.src = "assets/img/logo1.png";
});

// 5
let ele5 = document.querySelector("#ele5");
ele5.addEventListener("mouseover", function () {
  this.style.backgroundImage = "url(assets/img/logo1-unbrand.png)";
});
ele5.addEventListener("mouseout", function () {
  this.style.backgroundImage = "url(assets/img/logo1.png)";
});


