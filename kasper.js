let sliderImg = [...document.querySelectorAll(".slider")],
    nextBtn = document.querySelector(".next"),
    prevBtn = document.querySelector(".prev"),
    sliderCount = document.querySelector(".imgnumber"),
    counter = 1;


sliderImg.forEach((ele,ind)=>{
    let sliderSpan = document.createElement("span");
    sliderSpan.setAttribute("data-num" , ind +1)
    sliderCount.appendChild(sliderSpan);
    sliderSpan.addEventListener("click",()=>{
        sliderImg.forEach(e=>{
            e.classList.add("hideslider")
        })
        counter = sliderSpan.getAttribute("data-num");
        sliderImgShow();
        sliderNumberSpan()
    })
});
let sliderCounterSpan = document.querySelectorAll(".imgnumber span");
function sliderNumberSpan(){
    sliderCounterSpan.forEach((ele)=>{
        ele.classList.remove("here")
    })
    sliderCounterSpan[counter - 1].classList.add("here");
}
function sliderImgShow(){
    sliderImg[counter - 1].classList.remove("hideslider")
}
sliderNumberSpan();
sliderImgShow();
// console.log(sliderImg , nextBtn , prevBtn , sliderCounterSpan)

function next(){
    sliderImg.forEach((ele)=>{
        ele.classList.add("hideslider")
    });
    if(counter == 3){
        counter = 1
    }else{
        counter++;
    }
    // counter++;
    sliderImgShow();
    sliderNumberSpan();
    // console.log(counter)
}
function prev(){
    sliderImg.forEach((ele)=>{
        ele.classList.add("hideslider")
    });
    if(counter == 1){
        counter = 3
    }else{
        counter--;
    }
    // counter++;
    sliderImgShow();
    sliderNumberSpan();
}
nextBtn.addEventListener("click" , next);
prevBtn.addEventListener("click" , prev);


// hamburger

let hamburgerBtn = document.querySelector(".hamburger"),
    hamburgerSpan = hamburgerBtn.querySelectorAll("span");
// console.log(hamburgerBtn , hamburgerSpan)

hamburgerBtn.addEventListener("click", hamburgerFunction)


function hamburgerFunction(){
    hamburgerSpan[0].classList.toggle("firstspan");
    hamburgerSpan[1].classList.toggle("secondspan");
    hamburgerSpan[2].classList.toggle("thirdspan");
    document.querySelector("header nav").classList.toggle("shownav")
}




// filter

let filterBtns = document.querySelectorAll(".buttons button"),
    filterAll = filterBtns[0],
    filterApp = filterBtns[1],
    filterPhotos = filterBtns[2],
    filterWeb = filterBtns[3],
    filterImages = Array.from(document.querySelectorAll(".photos .image"));
// console.log(filterBtns , filterAll , filterApp ,filterPhotos ,filterWeb , filterImages)
filterAll.classList.add("active");
filterAll.addEventListener("click", filterAllFunc);
filterApp.addEventListener("click", filterAppFunc);
filterPhotos.addEventListener("click", filterPhotosFunc);
filterWeb.addEventListener("click", filterWebFunc);



function filterAllFunc(){
    filterImages.forEach(ele => {
        ele.classList.remove("hide");
    });
    filterBtns.forEach(ele=>{
        ele.classList.remove("active")
    })
    filterAll.classList.add("active")
}
function filterAppFunc(){
    filterImages.forEach(ele => {
        ele.classList.remove("hide");
    });
    filterImages.forEach( ele => {
        ele.getAttribute("data-filter") == "app" ? console.log("a") : ele.classList.add("hide")
    });
    filterBtns.forEach(ele=>{
        ele.classList.remove("active")
    })
    filterApp.classList.add("active")
}
function filterPhotosFunc(){
    filterImages.forEach(ele => {
        ele.classList.remove("hide");
    });
    filterImages.forEach( ele => {
        ele.getAttribute("data-filter") == "photos" ? console.log("a") : ele.classList.add("hide")
    });
    filterBtns.forEach(ele=>{
        ele.classList.remove("active")
    })
    filterPhotos.classList.add("active")
}
function filterWebFunc(){
    filterImages.forEach(ele => {
        ele.classList.remove("hide");
    });
    filterImages.forEach( ele => {
        ele.getAttribute("data-filter") == "web" ? console.log("a") : ele.classList.add("hide")
    });
    filterBtns.forEach(ele=>{
        ele.classList.remove("active")
    })
    filterWeb.classList.add("active")
}



// skills progress spans 

let progressSpan =[... document.querySelectorAll(".theskills .container .programmingskills .progress .prog div span")] ; 
// console.log(progressSpan)

progressSpan.forEach(e=>{
    e.style.width = e.getAttribute("data-percent");
    console.log(e.getAttribute("data-percent"))
})