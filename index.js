
 //viz images gallery

 var fullImgBox = document.getElementById("fullImgBox");
 var fullImg = document.getElementById("fullImg");
 
 function openFullImg(pic){
   fullImgBox.style.display = "flex";
   fullImg.src = pic;
 }
 
 function closeFullImg(){
   fullImgBox.style.display = "none";
 }

// 


function beforeAfter() {
    document.getElementById('separador').style.width = document.getElementById('deslizador').value + "%";
  }
