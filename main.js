const arrayOfPeople = [
    {
        title: "Samurai",
        name: "Tomoe Gozen",
        bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
        lifespan: {
            birth: 1747,
            death: 1797
        }
    },
    {
        title: "Samurai",
        name: "Tomoe Gozen",
        bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
        lifespan: {
            birth: 1747,
            death: 1797
        }
    },
    {
        title: "Samurai",
        name: "Tomoe Gozen",
        bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
        lifespan: {
            birth: 1747,
            death: 1797
        }
    },
    {
        title: "Samurai",
        name: "Tomoe Gozen",
        bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
        lifespan: {
            birth: 1747,
            death: 1797
        }
    }
];

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
}


const cardBuilder = () => {
    for (let i = 0; i < arrayOfPeople.length; i++) {
        let cardString = `<div id="wordsHere" class = "youHasPeople w-25">`;
        cardString += `<header class="thePeoplesHeader">`;
        cardString += `<h3>${arrayOfPeople[i].title}</h3>`;
        cardString += `<h3>${arrayOfPeople[i].name}</h3>`;
        cardString += `</header>`;
        cardString += `<section class="thePeoplesSection">`;
        cardString += `<img src='${arrayOfPeople[i].image}'</img>`;
        cardString += `<p class="peepsBio">${arrayOfPeople[i].bio}</p>`;
        cardString += `</section>`;
        cardString += `<footer class="thePeoplesFooter">`;
        cardString += `<p>${arrayOfPeople[i].lifespan.birth}</p>`;
        cardString += `<p>${arrayOfPeople[i].lifespan.death}</p>`;
        cardString += `</footer>`;
        cardString += `</div>`;
        printToDom(cardString, 'iHasPeople');
    }
};


//border

const cardBorder = () => {
    const cardElem = document.getElementsByClassName('youHasPeople');
    for (let i = 0; i < cardElem.length; i++) {
        const targeted = cardElem[i];
        targeted.addEventListener('click', (e) => {
            targeted.classList.toggle('makeStuff');
        })
    }
};


//focus

const inputFocus = () => {
    const inputElem = document.getElementsByClassName('youHasPeople');
    for (let i = 0; i < inputElem.length; i++) {
        const targeted = inputElem[i];
        targeted.addEventListener('click', (e) => {
            document.getElementById('typeInMe').focus();
        })
    }
};



//keyup, etc.

const inputText = () => {
    const inputElem = document.getElementById('iHasPeople');
    const children = inputElem.children;
    
    const selectedOnes = children.children[1].firstElementChild;

};

cardBuilder();
cardBorder();
inputFocus();
inputText();