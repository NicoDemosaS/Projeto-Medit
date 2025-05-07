function slide1(){
    document.getElementById('id').src="../assets/medite10.jpeg";
    setTimeout(slide2, 2000);
}

function slide2(){
    document.getElementById('id').src="../assets/espacomedit.jpeg";
    setTimeout(slide3, 2000);
}

function slide3(){
    document.getElementById('id').src="../assets/medite2.jpeg";
    setTimeout(slide1, 2000);
}

window.onload = slide1;