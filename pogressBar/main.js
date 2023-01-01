const width = document.querySelector('.move');

let solved = document.querySelector('.solved')//'10'

let total = document.querySelector('.total')// '100'


let fraction = (solved.textContent/total.textContent)*100;
   


if(fraction === 100){
    width.style = `border-top-right-radius: 0px;border-bottom-right-radius: 0px;width:${fraction}%`
}
    
else{
    width.style = `width:${fraction}%`
}




const btn = document.querySelector('button').addEventListener('click',()=>{
    solved.textContent = `${Number(solved.textContent)+1}`;
    let fraction = (solved.textContent/total.textContent)*100;
    console.log(fraction);

    
    if(fraction === 100){
        width.style = `border-top-right-radius: 0px;border-bottom-right-radius: 0px;width:${fraction}%`
    }
    
    else{
        width.style = `width:${fraction}%`
    }
   
})








