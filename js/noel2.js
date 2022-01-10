function noel2 (){
    
    while (true) {
        var escolha = prompt(" Quais são os itens? \n 1) Roupa da invisibilidade  \n 2) Poção da fúria cósmica para afastar as criaturas")
        
    if (escolha== 1) {
        window.location.href ="./noel3.html"; 
    }

    else if (escolha == 2) {
        window.location.href ="./noelgameover.html";
    }
        
    else {       
       prompt ("Opção inválida, escolha novamente: Quais são os itens? \n 1) Roupa da invisibilidade  \n 2) Poção da fúria cósmica para afastar as criaturas")         
    }
    break; 
      
    }
}