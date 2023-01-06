const images = document.querySelectorAll('.slider img')

let imageIndex = 0;


document.querySelector('.next').addEventListener('click',()=>{
    if(imageIndex<4){
        images[imageIndex].classList.remove('top');
        imageIndex += 1;
        images[imageIndex].classList.add('top');


    }
    else{
        images[imageIndex].classList.remove('top');
        imageIndex  = 0;
        images[imageIndex].classList.add('top');
       

    }

})


document.querySelector('.prev').addEventListener('click',()=>{
    if(imageIndex>0){
        images[imageIndex].classList.remove('top');
        imageIndex -= 1;
        images[imageIndex].classList.add('top');


    }
    else{
        images[imageIndex].classList.remove('top');
        imageIndex  = 4;
        images[imageIndex].classList.add('top');
       

    }

})