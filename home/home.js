function show() {
  if (document.querySelector("#menu").style.display == "none") {
    document.querySelector("#line2").style.display = "none";
    document.querySelector("#line1").style.transform =
      " rotate(45deg) translateY(10.5px)";
    document.querySelector("#line3").style.transform =
      " rotate(-45deg) translateY(-10.5px)";
    document.querySelector("#menu").style.display = "block";
    document.querySelector("#hide").style.display = "none";
    // document.querySelector('#line3').style.transform=" translate(2px)";
  } else {
    document.querySelector("#line2").style.display = "block";
    document.querySelector("#line1").style.transform =
      " rotate(0deg) translateY(0px)";
    document.querySelector("#line3").style.transform =
      " rotate(0deg) translateY(0px)";
    document.querySelector("#menu").style.display = "none";
    document.querySelector("#hide").style.display = "block";
  }
}

console.log("hello");
