
// quano for texto sempre coloca as ''
// para imprimir no console coloca entre o parenteses o nome da lista e escolher
// a posição do elemento da lista(lembrando que a contagem inicia no 0) 
//para imprimir dois elementos da lista no console.log console.log(doces[0], doces[4])
//para imprimir todos os elementos da lista no console se vc fazer console.log(doces), 
// ele imprime tudo inclusive os colchetes. o jeito correto de imprimir tudo é usando o loop for 
//for(i = 0; i < 6; i++){
   // console.log(doces[i])
//}
//length é para ser usado quando uma lista não tem fim
doces = ['brigadeiro', 'canjica', 'bolo de milho', 'paçoca', 'pamonha', 'cuscuz', 'cocada', 'pe de moloque']
//console.log(doces[3])
//console.log(doces[0], doces[4])
//console.log(doces)

//for(i = 0; i < doces.length; i++){
   // console.log(doces[i])
//}

// esse doce do parenteses pode ser substituido por qualquer nome que vc quiser para os elementos da sua lista.
doces.forEach(doce => {
    console.log(doce)
    
});