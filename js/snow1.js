
function snow1(){
    
    while (true) {
        var escolha = prompt("Snow esta na praça e precisa encontrar uma peça importante para montar o primeiro amuleto, onde está essa peça?\n 1) Na árvore \n 2) Embaixo do banco \n 3) Não está na praça")
        
    if (escolha == 1 || escolha == 3){
        window.location.href ="./snow1gameovr.html";

             
    }

    else if (escolha == 2){
        window.location.href ="./snow2.html";

     
    }            
      
    else {
       
        prompt("Opção inválida, escolha novamente. \n Snow esta na praça e precisa encontrar uma peça importante para montar o primeiro amuleto, onde está essa peça?\n 1) na grama \n 2) embaixo do banco \n 3)Não está na praça")
         
    }
    
    break;
   

    }

}




