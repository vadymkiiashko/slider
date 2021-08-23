"use strict"

const sledesContainer = document.querySelector(".slider");
const slide = document.querySelector(".slide")
const imagesArray = slide.querySelectorAll("img")
const buttonsContainer = document.querySelector(".naviagation--buttons")
let currentImage = 1;



//handle click event
const handleNavigaion =()=>{
    buttonsContainer.addEventListener("click",(e)=>{
        const clickedBtn = e.target.closest(".nav_button");
        if(!clickedBtn) return;
        moveSlides(clickedBtn);
       
    })
}
//add number to each image 
const numberImages =()=>{
    imagesArray.forEach((image,i)=>
        image.setAttribute("data-count",`${i+1}`)
    )
}


//
const moveSlides = (btn)=>{
    let direction; 

    if(btn.dataset.direction==="next"){
        direction = "-"
        currentImage++;
    } else {
        direction= "+"
        currentImage--;
    }


    slide.style.transform += `translateX(${direction}${slide.clientWidth}px)`;
    console.log(currentImage)
    
    //if(btn.dataset.count==="0")
    

}

const goToSlide =(slide)=>{
    
}

const app= ()=>{
    numberImages();
    handleNavigaion();
}

app()