"use strict"

const sledesContainer = document.querySelector(".slider");
const slide = document.querySelector(".slide")
const imagesArray = slide.querySelectorAll("img")
const buttonsContainer = document.querySelector(".naviagation--buttons")
//picture order is 0 based 
let nextImage = 0;



//handle click event
const handleNavigaion =()=>{
    buttonsContainer.addEventListener("click",(e)=>{
        const clickedBtn = e.target.closest(".nav_button");
        if(!clickedBtn) return;
            getNextImage(clickedBtn);
            slideToPicture(nextImage);
    })
}
//slide to next picture 
const slideToPicture = (picture =0)=>{
    imagesArray.forEach(image => image.style.transform  = `translateX(${-100*(picture)}%)`);

}
//figure out direction
const getNextImage = (clickedBtn)=>{
    if(!clickedBtn) return;
    if(clickedBtn.dataset.direction ==="next"){
        //MOVE RIGHT
        if(nextImage >= imagesArray.length-1){
            nextImage = 0;    
        }else 
        nextImage++;
               console.log(`right ${nextImage}`)
    } else {
        //Move Left
        if(nextImage===0){
            nextImage = imagesArray.length-1;
        }else 
        nextImage--;
        console.log(`left ${nextImage}`)
    }

}
//add number to each image 
const numberImages =()=>{
    imagesArray.forEach((image,i)=>
        image.setAttribute("data-count",`${i+1}`)
    )
}


const app= ()=>{
   // showImages();
    numberImages();
    handleNavigaion();
    slideToPicture();
}

app()
