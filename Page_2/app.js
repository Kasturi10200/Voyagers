$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});




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


/*

function search_sport() { 
    let input = document.getElementById('searchbar').value 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('carousel__slide'); 
      
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display= $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');;                  
        } 
    } 
} 
*/

/*var a = document.getElementById('tfnewsearch');
    a.addEventListener('submit',function(e) {
        e.preventDefault();
        var b = document.getElementById('tftextinput').value;
        window.location.href = "/"+ b;

    });*/






    function receipt_button() {
        let package = document.getElementById('members').value;
            document.querySelector("#package").value=package;
let members = document.getElementById('members').value;
         document.querySelector("#members").value=members;
let price = document.getElementById('price').value;
         document.querySelector("#price").value=price;
        alert("You've purchased "+package+ " package with number of members " +members+ " and your Total Price is Rs."+price);
    }

