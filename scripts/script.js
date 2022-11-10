function newImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("assets/33_shangichip.jpg")) {
        image.src = "assets/9_shangchiicon.jpg";
    } else {
        image.src = "assets/33_shangichip.jpg";
    }
}

function squadImage() {
    var image = document.getElementById('protagonist');
    if (image.src.match("assets/34_suicidesquadp.jpg")) {
        image.src = "assets/10_suicidesquadicon.jpg";
    } else {
        image.src = "assets/34_suicidesquadp.jpg";
    }
}

function freeImage() {
    var image = document.getElementById('imagep');
    if (image.src.match("assets/35_freeguyp.jpg")) {
        image.src = "assets/11_freeguyicon.jpg";
    } else {
        image.src = "assets/35_freeguyp.jpg";
    }
}

function cinderImage() {
    var image = document.getElementById('imagecinder');
    if (image.src.match("assets/36_cinderellap.jpg")) {
        image.src = "assets/12_cinderellaicon.jpg";
    } else {
        image.src = "assets/36_cinderellap.jpg";
    }
}

function squidImage() {
    var image = document.getElementById('imagesquid');
    if (image.src.match("assets/29_squidgamep.jpg")) {
        image.src = "assets/3_squidgameicon.jpg";
    } else {
        image.src = "assets/29_squidgamep.jpg";
    }
}

function lokiImage() {
    var image = document.getElementById('imageloki');
    if (image.src.match("assets/30_lokip.jpg")) {
        image.src = "assets/4_lokiicon.jpg";
    } else {
        image.src = "assets/30_lokip.jpg";
    }
}

function murderImage() {
    var image = document.getElementById('imagemurder');
    if (image.src.match("assets/31_onlymurdersp.jpg")) {
        image.src = "assets/5_onlymurdersicon.jpg";
    } else {
        image.src = "assets/31_onlymurdersp.jpg";
    }
}

function sexedImage() {
    var image = document.getElementById('imagesexed');
    if (image.src.match("assets/32_sexeducationp.jpg")) {
        image.src = "assets/6_sexeducationicon.jpg";
    } else {
        image.src = "assets/32_sexeducationp.jpg";
    }
}

function confirmAge() {
  if (localStorage.getItem("hasCodeRunBefore") === null) {
     var age = prompt("Please write your age.");
     if (age >= 18) {
 window.confirm("Welcome to Cinema Reviews!");
     } else {
       window.confirm("WARNING. Please be advised that there might be unappropriate content for minors.");
     }
localStorage.setItem("hasCodeRunBefore", true);
  }
}


function showAlert() {
     var alertt = alert("The following sites are paid subscription streaming services.");
  }
