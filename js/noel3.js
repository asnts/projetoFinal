function noel3 (){
    
    while (true) {
        var escolha = prompt(" Jogue o dado para testar sua sorte: \n 1)  \n 2) ")
        
    if (escolha== 1) {
        window.location.href ="./noelfinal.html"; 
    }

    else if (escolha == 2) {
        window.location.href ="./noelgameover.html";
    }
        
    else {
       prompt ("Opção inválida, escolha novamente: Jogue o dado \n 1)  \n 2)")
         
    }
    break;    
 
    }
}