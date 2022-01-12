function noel1(){
    
    while (true) {
        var escolha = prompt("Noel está sozinho, mas de repente aparece uma criatura vindo em sua direção, o que ele faz?  \n 1) Se esconde em um buraco \n 2) Veste um pedaço de trapo e começa uma conversa com voz monstruosa")
        
    if (escolha== 1) {
        window.location.href ="./noelgameover.html"; 
    }

    else if (escolha == 2) {
        window.location.href ="./noel2.html";
    }
      
    else {       
       prompt ("Opção inválida, escolha novamente: Noel está sozinho, mas de repente aparece uma criatura vindo em sua direção, o que ele faz?  \n 1) Não faz nada e se esconde \n 2) Tenta ser amigável e pede uma informação")
         
    }
        break; 
      
    }
}