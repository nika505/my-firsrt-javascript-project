const day = document.querySelector('.Day');
const night = document.querySelector('.night');
function toogle(){
    if(day.classList.contains('Day')){
        day.classList.remove('active');
        night.classList.add('active');
        document.body.style.background = "black";
    }
}
function toogle1(){
    if(night.classList.contains('night')){
        night.classList.remove('active');
        day.classList.add('active');
        document.body.style.background = "white";
    }
}
day.addEventListener('click',toogle)
night.addEventListener('click',toogle1)