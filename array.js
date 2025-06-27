lista = ["brigadeiro", "cocada", "quindim"]


notasDoces = [10, 7.5, 5]

brigadeiro = ["brigadeiro", 10]

doces = [["brigadeiro",10], ["cocada",7.5], ["quindim",5]]
// para imprimir o item quindim da lista vc precisa achar a posição dele na lista 
// doces [["brigadeiro",10], ["cocada",7.5], ["quindim",5]] ele é o 3 item que está 
//na posição 2, depois na lista quindim ["quindim",5] ele vai ser o 1 item da lista na 
//posição 0.


doces.push(["paçoca", 8])
qualDoce = doces.pop()

doces.shift()
doces.splice(0, 1)
console.table(qualDoce) 
console.table(doces)



