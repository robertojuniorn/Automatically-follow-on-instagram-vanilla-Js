
let contador = 0;
let arr = document.querySelectorAll('._8A5w5');

arr.forEach((v, i) =>{
    setTimeout(() => {
        if(!v.classList.contains('L3NKy')){
            console.log('Roberto voce deixou de seguir '+contador+' pessoas ');
        }else{
            console.log('Voce parou de seguir este usuario a bastante tempo.')
        }
    }, i * 10000 );
});