const startButton = document.querySelector(".startBtn");
const nextButton = document.querySelector(".button-1");
const start = document.querySelector(".start");
const endButton = document.querySelector(".exit");
const head = document.querySelector(".head");
const main = document.querySelector(".main");
const openDiv = document.querySelector(".openDiv");
const win = document.querySelector(".win");
const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");
const submitButton = document.querySelector("submit");
const resumeButton = document.querySelector(".resume");
const navDiv = document.querySelector(".navDiv");
const sidebar = document.querySelector(".sidebar");
const item1 = document.querySelector("#item1");
const item2 = document.querySelector("#item2");
const item3 = document.querySelector("#item3");
const vehicleName = document.querySelector(".vehicle-name");


startButton.addEventListener("click", function() {
    hideDisplay1();
    addRandomItems();

});
nextButton.addEventListener("click", function() {
    addRandomItems();

});
openButton.addEventListener("click", function() {
    sidebar.style.display = 'flex';
    openButton.style.display = 'none';
    closeButton.style.display = 'block';

});
closeButton.addEventListener("click", function() {
    sidebar.style.display = 'none';
    openButton.style.display = 'block';
    closeButton.style.display = 'none';

});

function hideDisplay1() {
    start.style.display = 'none';
    openDiv.style.display = 'block';
    main.style.display = 'block';
}

function hideDisplay2() {

}
// var i = 1;

// function addItems() {
//     for (i = 1; i < 4; i++) {
//         createDiv();
//     }
// }
function removeItems() { // Remove existing items
    while (item1.firstChild) {
        item1.firstChild.remove();
    }
    while (item2.firstChild) {
        item2.firstChild.remove();
    }
    while (item3.firstChild) {
        item3.firstChild.remove();
    }
}

let itemCount = 2;


function addRandomItems() {



    // Remove existing items
    removeItems()


    const vehicle = [
        "Bicycle",
        "Car",
        "Bike",
        "Truck",
        "Auto",
        "Bus"
    ];

    const nonVehicle = [
        "fruits/apple.svg",
        "fruits/orange.svg",
        "fruits/bananas.svg",
        "fruits/mango.svg",
        "fruits/grapes.svg",
        "fruits/watermelon.svg",
        "fruits/strawberry.svg",
        "fruits/pineapple.svg"
    ];

    const VehiclePositionIndex = Math.floor(Math.random() * itemCount);
    const randomVehicleIndex = Math.floor(Math.random() * vehicle.length);
    const vehicleImage = vehicle[randomVehicleIndex];

    for (let i = 0; i < itemCount; i++) {
        let itemImage;
        let itemAlt;

        if (i === VehiclePositionIndex) {
            itemImage = "/vehicles/" +
                vehicleImage + ".svg";
            itemAlt = "vehicle";
            vehicleName.innerHTML = vehicleImage;
        } else {
            const randomItemIndex = Math.floor(Math.random() * vehicle.length);
            itemImage = nonVehicle[randomItemIndex];
            nonVehicle.splice(randomItemIndex, 1);
            itemAlt = "nonVehicle";
        }

        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");
        const itemImg = document.createElement("img");
        itemImg.src = itemImage;
        itemImg.alt = itemAlt;
        itemImg.classList.add("item-img");

        if (itemImage.substring(0, 9) == 'nonVehicle') {
            itemDiv.classList.add('nonVehicle');
        }
        itemDiv.addEventListener("click", click);
        itemDiv.appendChild(itemImg);
        console.log("Ki");

        if (item1.childElementCount < 2) {
            item1.appendChild(itemDiv);
        } else if (item2.childElementCount < 2) {
            item2.appendChild(itemDiv);
        } else if (item3.childElementCount < 2) {
            item3.appendChild(itemDiv);
        }

    }
    if (itemCount > 6) {
        removeItems();
    }


}

function click(event) {
    // // Event handling code goes here
    // var element = document.getElementsByClassName("item");
    // var spanElements = document.querySelector("#mark");
    // // console.log(draggedElement);
    // // Check if the dropped item is a fruit
    // if (element.classList.contains("nonVehicle")) {
    //     spanElements[0].style.display = 'block';
    //     document.getElementById("mark").innerHTML = "&#10007;"; // Add a cross mark
    //     document.getElementById("mark").style.color = "red"; // Set color to red
    //     document.getElementById("yuckySound").play(); // Play the yucky sound
    //     updateScore(-1); // Decrement the score by 1
    //     const gif2 = document.getElementsByClassName("gif2");
    //     if (gif2.length > 0) {
    //         gif2[0].style.display = 'block';
    //     }

    // } else {

    //     spanElements[0].style.display = 'block';
    //     document.getElementById("mark").innerHTML = "&#10003;"; // Add a tick mark
    //     document.getElementById("mark").style.color = "green"; // Set color to green
    //     document.getElementById("awesomeSound").play(); // Play the awesome sound

    //     updateScore(1); // Increment the score by 1
    //     const gif1 = document.getElementsByClassName("gif1");
    //     if (gif1.length > 0) {
    //         gif1[0].style.display = 'block';
    //     }
    //     const win = document.getElementsByClassName("win");
    //     if (win.length > 0) {
    //         win[0].style.display = 'block';
    //     }
    // }

    itemCount++;

}

// function createDiv() {
//     const itemsDiv = document.getElementById("item" + i);

//     // Create two item elements
//     const itemDiv1 = document.createElement('div');
//     itemDiv1.classList.add("item");

//     const itemDiv2 = document.createElement('div');
//     itemDiv2.classList.add("item");

//     // Create an image element for the item related to the main heading
//     const imageElement1 = document.createElement('img');
//     imageElement1.src = '/items/bicycle.webp';
//     const imageElement2 = document.createElement('img');
//     imageElement2.src = '/items/car.webp'; // Replace with the actual image path
//     // imageElement.alt = ;

//     // Append the image element to itemElement1
//     itemDiv1.appendChild(imageElement1);
//     itemDiv2.appendChild(imageElement2);


//     // Append the item elements to item1Div
//     itemsDiv.appendChild(itemDiv1);
//     itemsDiv.appendChild(itemDiv2);



// }

theme = document.getElementById("theme");
theme.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains('dark-theme')) {
        theme.innerHTML = "LIGHT MODE";
    } else {
        theme.innerHTML = "DARK MODE";
    }
}