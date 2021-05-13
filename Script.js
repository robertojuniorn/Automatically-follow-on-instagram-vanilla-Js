
let contador = 0;
// Pegamos a class do button seguir atraves do DOM
let arr = document.querySelectorAll('.L3NKy');

// Pegamos o array e usamos o forEach para percorrer
arr.forEach((v, i) =>{

// Vai executar o bloco de codigo depois depois de 10 segundos

    setTimeout(() => {
        if(!v.classList.contains('_8A5w5')){
            console.log('Roberto voce deixou de seguir '+contador+' pessoas ');
        }else{
            console.log('Voce parou de seguir este usuario a bastante tempo.')
        }
    }, i * 10000 );
});