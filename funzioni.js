//creo numero casuale

const numeroCasuale = function (){
    let numeroCaso = Math.floor((Math.random()*76)+1)
    return numeroCaso
}

const buttonEvento = document.getElementById("buttonEstrai")
buttonEvento.addEventListener("click", numeroCasuale)

//funzione crea i numeri da 1 a 76

const tabellaTombola = function(caso){
    const contenitore = document.getElementById("contenitoreNumeri")
    for(let i = 1; i < 77;i++){
        const boxNumero = document.createElement("div")  
        if(i === caso){
            boxNumero.classList.add("selected")
        }
        boxNumero.innerText = i
        contenitore.appendChild(boxNumero)
        
    }
}
tabellaTombola(numeroCasuale)



