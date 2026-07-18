// =========================================
// GALLERY FILTER
// =========================================


const filterButtons = document.querySelectorAll(".filter-btn");

const galleryItems = document.querySelectorAll(".gallery-item");


filterButtons.forEach(button => {


button.addEventListener("click", function(){


let filter = this.getAttribute("data-filter");



galleryItems.forEach(item => {



if(filter === "all" || item.classList.contains(filter))
{

item.style.display = "block";

}

else

{

item.style.display = "none";

}


});



});



});




// =========================================
// LIGHTBOX
// =========================================


const images = document.querySelectorAll(".gallery-item img");



images.forEach(image => {


image.addEventListener("click",()=>{


let overlay = document.createElement("div");


overlay.className="image-lightbox";



overlay.innerHTML = `

<div class="lightbox-content">

<span class="close-lightbox">
&times;
</span>

<img src="${image.src}">

</div>

`;



document.body.appendChild(overlay);





document.querySelector(".close-lightbox")
.onclick=function(){

overlay.remove();

}



overlay.onclick=function(e){

if(e.target===overlay)
{

overlay.remove();

}

}



});



});
