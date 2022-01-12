
function toni1(){
    
    while (true) {
        var escolha = prompt("Toni está perdido e o primeiro amuleto está em seu novo local, mas onde ele está? \n 1) Continua em Milão mas está no futuro \n 2) Winchester")
        
    if (escolha== 1) {
        window.location.href ="./toni1gameovr.html"; 
    }

    else if (escolha == 2) {
        window.location.href ="./toni2.html";
    }
        
    else {
       
       prompt ("Opção inválida, escolha novamente: Toni está perdido e o primeiro amuleto está em seu novo local, mas onde ele está? \n 1) Continua em Milão mas está no futuro \n 2) Winchester")
         
    }

    break; 
    

  
    }
}



