// header dropdown toggle start
const mbldrpbtn = document.querySelector(".mobilemenulist__itemrowicn");
const mobilemenulistDropDown = document.querySelector(".mobilemenulistDropDown");
mbldrpbtn.addEventListener('click', function(){
    mbldrpbtn.classList.toggle('active');
    mobilemenulistDropDown.classList.toggle('active');
});
// header dropdown toggle end

// search button on header start
const hdrboxSerchBtn = document.querySelector(".hdrboxSerchBtn");
const hdrboxSerch__form = document.querySelector(".hdrboxSerch__form");
hdrboxSerchBtn.addEventListener('click', function(){
    hdrboxSerch__form.classList.toggle("active")
})
document.querySelector("body").addEventListener('click',function(){
    hdrboxSerch__form.classList.remove("active")
})
hdrboxSerchBtn.addEventListener('click', function(event){
    event.stopPropagation();
})
hdrboxSerch__form.addEventListener('click', function(event){
    event.stopPropagation();
})
// search button on header end
// *********************************************************************************** //
// language toggle button start
const ar = document.querySelector(".ar");
const en = document.querySelector(".en");
const lang = document.querySelector("body");
const dir = document.querySelector("html");
en.addEventListener('click', function(){
    ar.classList.add('active');
    lang.classList.add('ltr');
    en.classList.remove('active');
    dir.setAttribute('dir','ltr');
    localStorage.setItem('ltr','true')
})
ar.addEventListener('click', function(){
    en.classList.add('active');
    lang.classList.remove('ltr');
    ar.classList.remove('active');
    dir.setAttribute('dir','rtl')
    localStorage.removeItem('ltr')
})
if(localStorage.getItem('ltr') == "true"){
    ar.classList.add('active');
    lang.classList.add('ltr');
    en.classList.remove('active');
    dir.setAttribute('dir','ltr');
}
// language toggle button end
// *********************************************************************************** //

// header form button start
const hdrboxformbtn = document.querySelector(".hdrboxformbtn");
const hdrboxform = document.querySelector(".hdrboxform");
hdrboxformbtn.addEventListener('click', function(){
    hdrboxformbtn.classList.toggle('active')
    hdrboxform.classList.toggle('active')
})
document.querySelector("body").addEventListener('click',function(){
    hdrboxformbtn.classList.remove("active")
    hdrboxform.classList.remove("active")
})
hdrboxformbtn.addEventListener('click', function(event){
    event.stopPropagation();
})
hdrboxform.addEventListener('click', function(event){
    event.stopPropagation();
})
// header form button end
// *********************************************************************************** //
// mobile nav start
// *********************************************************************************** //
const mobilemenu = document.querySelector('.mobilemenu');
const navbtn = document.querySelector('.navbtn');
const mobilemenuClose = document.querySelector('.mobilemenuClose');
navbtn.addEventListener('click', function(){
    mobilemenu.classList.add('active');
})
mobilemenuClose.addEventListener('click', function(){
    mobilemenu.classList.remove('active');
})
document.querySelector("body").addEventListener('click',function(){
    mobilemenu.classList.remove("active");
    mobilemenu.classList.remove("active");
})
navbtn.addEventListener('click', function(event){
    event.stopPropagation();
})
mobilemenu.addEventListener('click', function(event){
    event.stopPropagation();
})
// mobile nav end
// *********************************************************************************** //






























