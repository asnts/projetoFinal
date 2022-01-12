
function toni2(){
    
    while (true) {
       
        var escolha = prompt("O primeiro item foi encontrado, ufa! Mas o portal só se abre com a combinação de mais 2 itens e toni não sabe quais são, ajude ele a descobrir: \n 1)  Um punhado de trigo + raspas de limão  \n 2) pedra de Safira + poção da flor Artemísia")

    if (escolha== 1){
        window.location.href ="./toni2gameovr.html"; 
    }

            
    else if (escolha == 2){
        window.location.href ="./toni3.html";
        
    }
        
  
    else {
       
         prompt("Opção inválida, escolha novamente. \n O primeiro amuleto foi encontrado, ufa! Mas o portal só se abre com a combinação de mais 2 itens e toni não sabe quais são, ajude ele a descobrir: \n 1) Um punhado de trigo + raspas de limão \n 2) pedra de Safira + poção da flor Artemísia")
        
    }

    break; 

    }

}




