const blid2tagcol2Box1 = document.querySelector(".blid2tagcol2Box1");
const blid2tagcol2Box1sm = document.querySelector(".blid2tagcol2Box1-sm");
blid2tagcol2Box1.addEventListener('click', function(){
    blid2tagcol2Box1sm.classList.toggle('active');
})
document.querySelector('body').addEventListener('click', function(){
    blid2tagcol2Box1sm.classList.remove('active');
})
blid2tagcol2Box1.addEventListener('click', function(event){
    event.stopPropagation();
})
blid2tagcol2Box1sm.addEventListener('click', function(event){
    event.stopPropagation();
})