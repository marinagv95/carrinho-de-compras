const productsCart = [
    {
        id: 1,
        name: "Salmão",
        price: 120.00
    }, 
    {
        id: 2,
        name: "Vinho Tinto",
        price: 80.00
    },
    {
        id: 3,
        name: "Raviolli",
        price: 55.00
    }, 
    {
        id: 4,
        name: "Batata",
        price: 15.00
    }, 
    {
        id: 5,
        name: "Tiramisu",
        price: 35.00
    }, 
    
    
   
]


let body = document.querySelector("body")

let main = document.createElement("main")
main.classList.add("mainLI")
body.appendChild(main)
let ul = document.createElement("ul")
ul.classList.add("ulLi")
main.appendChild(ul)


document.querySelector("main").insertAdjacentHTML("afterbegin", `
<div class ="titulo"><h2>Item</h2>

<h2 class="valorH2">Valor</h2>
</div>


`)

 let soma = 0
for(let i = 0; i< productsCart.length; i++){

  
    let itens = productsCart[i]

   
    soma += itens.price
    
    console.log(soma)
    
    

    document.querySelector(".ulLi").insertAdjacentHTML("beforeend", `

   

<li class="listaItens"> <span> ${itens.name} </span> <span> R$${itens.price}</span></li> 


 

 

     `)

    
   
    
}



let section = document.createElement("section")
section.classList.add("sectionFinal")
main.appendChild(section)
// let button = document.createElement("button")
// button.innerText = "Finalizar"
// button.classList.add("button")
// section.appendChild(button)

document.querySelector(".sectionFinal").insertAdjacentHTML("afterbegin", `


<div class="soma">
<p class="valorTotal">Valor Total:</p> <p class="somatoria">R$${soma}</p>
</div>


<div class="botao">
<button>Finalizar</button>
</div>



`)



