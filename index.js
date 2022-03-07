const cardArray =[
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name: "fries",
        img: "images/fries.png"
    },
    {
        name: "fries",
        img: "images/fries.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "images/milkshake.png"
    },
    {
        name: "milkshake",
        img: "images/milkshake.png"
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    },
    
]

let cardsChosenId =[]
let cardsChosen = []
let cardsWon = []
let score = 0
const p = document.querySelector("p")


//Create board
const grid = document.querySelector(".grid")
function createBoard(){
    for(let i=0; i < cardArray.length; i++){
        const card = document.createElement("img")
        card.setAttribute("src", "images/blank.png") 
        card.setAttribute("data-id",i)
        card.addEventListener("click", flipCard)
        grid.appendChild(card)
    }
}
createBoard()



function checkForMatch(){
    const images = document.querySelectorAll("img")

    if (cardsChosenId[0]!=cardsChosenId[1] && cardsChosen[0] === cardsChosen[1]){
        score++
        cardsWon.push(cardsChosen)
        for(id of cardsChosenId){
            images[id].setAttribute("src", "images/pink.png")
            images[id].removeEventListener("click",flipCard)
        }
      
        p.textContent = " 🙌 ISSSA MATCH!"
        
        
        if(cardsWon.length === cardArray.length/2){
            cardsWon = []
            shuffleArray(cardArray)
            p.textContent = `🎉 
                you've WON!`
            images.forEach(img => {
                img.setAttribute("src", "images/blank.png")
                img.addEventListener("click", flipCard)
            
            })

        }

    }else {
        cardsChosenId.forEach(id => {
            images[id].setAttribute("src", "images/blank.png")
            p.textContent = "😭 TRY AGAIN!"  
    })
        
    }
    cardsChosen = []
    cardsChosenId = []
    document.getElementById("score").textContent = score

}



function flipCard(){
    const cardId = this.getAttribute("data-id")
    cardsChosenId.push(cardId)
    cardsChosen.push(cardArray[cardId].name)
    this.setAttribute("src", cardArray[cardId].img)
    
    if(cardsChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }

}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}