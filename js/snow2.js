function snow2(){
    
    while (true) {
        var escolha = prompt("\n 1) Na mansão dos Bridgerton \n 2) Caído no bueiro da Av. Downtown \n 3) Quem disse que precisa de outro amuleto?")

    if (escolha== 1){
        window.location.href ="./snow3.html";

    }

    else if (escolha == 2 ||escolha ==3) {
        window.location.href ="./snow2gameovr.html";      
        
    }
      
    else {
       
        prompt("Opção inválida, escolha novamente. \n 1) Na mansão Bridgerton \n 2) Caído no bueiro da Av. Downtown \n 3) Quem disse que precisa de outro amuleto? ")      
    }

    break; 
    }

}
