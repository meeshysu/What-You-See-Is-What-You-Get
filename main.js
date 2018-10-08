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
        let cardString = `<people class = "youHasPeople w-25">`;
        cardString += `<header id="thePeoplesHeader">`;
        cardString += `<h3>${arrayOfPeople[i].title}</h3>`;
        cardString += `<h3>${arrayOfPeople[i].name}</h3>`;
        cardString += `</header>`;
        cardString += `<section class="thePeoplesSection">`;
        cardString += `<img src='${arrayOfPeople[i].image}'</img>`;
        cardString += `<p id="peepsBio${i}">${arrayOfPeople[i].bio}</p>`;
        cardString += `</section>`;
        cardString += `<footer id="thePeoplesFooter">`;
        cardString += `<p>${arrayOfPeople[i].lifespan.birth}</p>`;
        cardString += `<p>${arrayOfPeople[i].lifespan.death}</p>`;
        cardString += `</footer>`;
        cardString += `</people>`;
        printToDom(cardString, 'bioContainer');
    }
};


//border

const hedgieCards = document.getElementsByClassName('youHasPeople');

const cardBorder = () => {
    for (i = 0; i < hedgieCards.length; i++) {
        hedgieCards[i].addEventListener('click', (e) => {
            const clickedOnCard = e.currentTarget;
            clickedOnCard.classList.toggle('makeStuff');
        })
    }
};


//focus

const inputFocus = () => {
    for (i = 0; i < hedgieCards.length; i++) {
        hedgieCards[i].addEventListener('click', () => {
            document.getElementById('bioContainer');
            bioInput.focus();
        })
    }
};


//keyup

const bioInput = document.getElementById('inputForm');

const inputText = () => {
    bioInput.addEventListener('keyup', () => {
        let cardText = document.getElementById('bioContainer');
        cardText.getElementsByTagName('p')[0].innerHTML = bioInput.value;
    })
};


cardBuilder();
cardBorder();
inputFocus();
inputText();
