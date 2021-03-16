const scrollBtn = document.querySelector('#flche');

window.addEventListener('scroll', ()=> {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        scrollBtn.style.display = "block";
    }else{
        scrollBtn.style.display = "none";
    }
})