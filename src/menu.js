const container = document.getElementById("content");

let main4 = () =>{
    //.main child of #content
    let main = document.createElement("div");
    main.classList.add("main");

    //.main-content child of .main
    let content = document.createElement("div");
    content.classList.add("main-container3");

    //main-container3 header child of main-container3
    let main3top = document.createElement("div");
    main3top.classList.add("main3-header");
    
    let headmain3 = document.createElement("h2");
    headmain3.innerHTML = "Our Menu"

    //main-container3 card-container child of main-container3
    let cardcontain = document.createElement("div");
    cardcontain.classList.add("card-container");

    //card child of card-container

    let card1 = document.createElement("div");
    card1.classList.add("card");

    let card2 = document.createElement("div");
    card2.classList.add("card");

    let card3 = document.createElement("div");
    card3.classList.add("card");

    //div img

    let top1 = document.createElement("div");
    top1.classList.add("menu-1");

    let pic1 = document.createElement("img");
    pic1.src = "../pics/salad.jpeg"

    let top2 = document.createElement("div");
    top2.classList.add("menu-2");

    let pic2 = document.createElement("img");
    pic2.src = "../pics/senior.jpeg"

    let top3 = document.createElement("div");
    top3.classList.add("menu-2");

    let pic3 = document.createElement("img");
    pic3.src = "../pics/smoothie.jpeg"

    let bot1 = document.createElement("div");
    bot1.classList.add("bot1");

    let bot2 = document.createElement("div");
    bot2.classList.add("bot2");

    let bot3 = document.createElement("div");



    main.appendChild(content);
    content.appendChild(main3top);
    main3top.appendChild(headmain3);
    content.appendChild(cardcontain);
    cardcontain.appendChild(card1);
    cardcontain.appendChild(card2);
    cardcontain.appendChild(card3);
    // Card 1
    card1.appendChild(top1);
    card1.appendChild(bot1);
    top1.appendChild(pic1);
    // Card 2
    card2.appendChild(top2);
    card2.appendChild(bot2);
    top2.appendChild(pic2);
    // Card 3
    card3.appendChild(top3);
    card3.appendChild(bot3);
    top3.appendChild(pic3);

    container.appendChild(main);
}

export {main4} 