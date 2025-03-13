const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    let currCard = flashcards[currentIndex]
    let text = document.getElementById('card-content')
    let card = document.getElementsByClassName('flashcard')
    if(showingTerm){
        text.innerText = currCard.term
    }
    else{
        text.innerText = currCard.definition
    }
    card.appendChild(text)

}

document.getElementById('next-btn').addEventListener('click', ()=>{
    if(currentIndex === flashcards.length-1){
        currentIndex = 0
    }
    else{
        currentIndex++
    }
    showingTerm = true
    displayCard()
})

document.getElementById('prev-btn').addEventListener('click', ()=>{
    if (currentIndex === 0){
        currentIndex = flashcards.length-1
    }
    else{
        currentIndex = currentIndex - 1
    }
    showingTerm = true
    displayCard()
})

document.getElementById('flashcard').addEventListener('click', ()=>{
    if(showingTerm){
        showingTerm = false
    }
    else{
        showingTerm = true
    }
    displayCard()
})

document.getElementById('add-card-btn').addEventListener('click', ()=>{
    let newterm = document.getElementById('new-term').value
    let newdefinition = document.getElementById('new-definition').value
    let newcard = {
        term: newterm,
        definition: newdefinition
    }
    flashcards.push(newcard)
})



// The rest of the code you will write is apart of event listeners

// This line will display the card when the page is refreshed
window.onload = displayCard;
