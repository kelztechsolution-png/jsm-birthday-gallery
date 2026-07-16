/* =====================================
   BIRTHDAY GALLERY JAVASCRIPT
===================================== */


/* =====================================
   IMAGE VIEWER
===================================== */


function openImage(image){

    const viewer = document.getElementById("viewer");

    const previewImage = document.getElementById("previewImage");

    const downloadButton = document.getElementById("downloadButton");


    previewImage.src = image;


    downloadButton.href = image;


    viewer.style.display = "flex";


    document.body.style.overflow = "hidden";

}




function closeImage(){

    const viewer = document.getElementById("viewer");


    viewer.style.display = "none";


    document.body.style.overflow = "auto";

}






/* =====================================
   CLOSE WHEN CLICKING OUTSIDE IMAGE
===================================== */


document.getElementById("viewer").addEventListener(
    "click",
    function(event){


        if(event.target.id === "viewer"){

            closeImage();

        }


    }
);







/* =====================================
   ESC KEY CLOSE
===================================== */


document.addEventListener(
    "keydown",
    function(event){


        if(event.key === "Escape"){

            closeImage();

        }


    }
);







/* =====================================
   SIMPLE IMAGE LOADING EFFECT
===================================== */


const images = document.querySelectorAll("img");


images.forEach(function(image){


    image.addEventListener(
        "load",
        function(){

            image.style.opacity = "1";

        }
    );


});