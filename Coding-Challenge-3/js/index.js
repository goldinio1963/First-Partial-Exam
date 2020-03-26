let sumbit = document.querySelector('#submit');
let name = document.querySelector('.userName');
let comment = document.querySelector('#userComment');
let end = document.querySelector('.seccionComments');

sumbit.addEventListener("submit" , (event) => {
    
    if(name != " " && comment != " "){
        end = String(name + comment);
    }

})