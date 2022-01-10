function snow3 (){
    
    while (true) {
        var escolha = prompt("Jogue o dado para a temperatura baixar e o Snow sobreviver \n 1) \n 2) \n 3)")

    if (escolha== 2){
        window.location.href ="./snowfinal.html";        
        
    } 

    else if (escolha == 1 || escolha ==3){
        window.location.href ="./snow3gameovr.html";
        
    }
        
    else {
       
        prompt("Opção inválida, escolha novamente. \n Jogue o dado para a temperatura baixar e o Snow sobreviver. \n 1) \n 2) \n 3) ")
         
    }

    break; 

    }

}

