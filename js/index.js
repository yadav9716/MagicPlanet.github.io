// &#9790;
let logo = document.getElementById("color-logo");
let symbol_btn = document.getElementById('symbol');
let container = document.getElementById("container");
let colorText1 = document.getElementById("color-text1");
let colorText2 = document.getElementById("color-text2");
let colorText3 = document.getElementById("color-text3");
let colorText4 = document.getElementById("color-text4");
let center = document.getElementById("center")
let no=0;

symbol_btn.addEventListener("click", function() {
    console.log("hello")
    if(no%2 == 0){
        console.log("1");
        symbol_btn.innerHTML = `&#9728`;
        center.innerHTML = `<img src="img/planet1.png" class="logo"> PlanetX`;
        container.style.color = "black";
        colorText1.style.color = "black";
        colorText2.style.color = "black";
        colorText3.style.color = "black";
        colorText4.style.color = "black";
        container.style.backgroundColor = "white";
        // container.style.backgroundImage = "url('https://i.pinimg.com/originals/79/a3/84/79a384c3c449ad01b0e57e790807b2c0.gif')";
    }
    else{
        console.log("2");
        symbol_btn.innerHTML = `&#9790`;
        container.style.color = "white";
        center.innerHTML = `<img src="img/planet2.png" class="logo"> PlanetX`;
        colorText1.style.color = "white";
        colorText2.style.color = "white";
        colorText3.style.color = "white";
        colorText4.style.color = "white";
        container.style.backgroundColor = "black";
        // container.style.backgroundImage = "url('https://i.pinimg.com/originals/79/a3/84/79a384c3c449ad01b0e57e790807b2c0.gif')";
    }
    no++;
});



