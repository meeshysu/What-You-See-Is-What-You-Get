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
        cardString += `<p>${arrayOfPeople[i].bio}</p>`;
        cardString += `</section>`;
        cardString += `<footer class="thePeoplesFooter">`;
        cardString += `<p>${arrayOfPeople[i].lifespan.birth}</p>`;
        cardString += `<p>${arrayOfPeople[i].lifespan.death}</p>`;
        cardString += `</footer>`;
        cardString += `</div>`;
        printToDom(cardString, 'iHasPeople');
    }  
};
cardBuilder();

//border
//function, get element by class name, for loop, event listener, target, classListtoggle 

// const peoplesBorder = () => {
//     const dasPeepsBorder = document.getElementsByClassName("youHasPeople");
//     for (i = 0; i < dasPeepsBorder.length; i++) {
//         dasPeepsBorder[i].document.getElementsByClassName('click', (e) => {
//             .innerHTML = e.target.classList="toggle";
//         })

//     }
// }
// peoplesBorder();


const peoplesBorder = document.getElementById('iHasPeople');
const justABorder = (e) => {
    for (i = 0; i < justABorder.length; i++) {    
    justABorder[i].document.getElementById('wordsHere').classList.toggle('makeStuff');
}
}
peoplesBorder.addEventListener('click', justABorder);