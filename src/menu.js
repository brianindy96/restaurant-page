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
    
    let headmain3 = document.createElement("h1");
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
    bot3.classList.add("bot3");

    //Menu Names

    let botname1 = document.createElement("h2");
    botname1.innerHTML = 'Brain Salad';
    botname1.classList.add("bot1-title");

    let botname2 = document.createElement("h2");
    botname2.innerHTML = 'Senior Citizens';
    botname2.classList.add("bot2-title");
    
    let botname3 = document.createElement("h2");
    botname3.innerHTML = 'Brain Smoothies';
    botname3.classList.add("bot3-title");


    // List of Menus
    let bot1list = document.createElement("ul");
    let items = ['Lettuce', 'Tomatoes', 'Human Brain', 'Fingernails','Snake Eggs'];

    for (let i =0; i < items.length; i++){
        let item = document.createElement('li');
        item.innerHTML = items[i];
        bot1list.appendChild(item);
    }

    let bot2list = document.createElement("ul");
    let johns = ['White Hair', 'Fake Teeth', 'Human Wisdom', 'Fried Wrinkly Skin',"That's too far.."];

    for (let i =0; i < johns.length; i++){
        let item = document.createElement('li');
        item.innerHTML = johns[i];
        bot2list.appendChild(item);
    }

    let bot3list = document.createElement("ul");
    let smoothies = ['Fresh Brain', 'Blood Syrup', 'Nails Sprinkles', 'Teeth seeds',];

    for (let i =0; i < smoothies.length; i++){
        let item = document.createElement('li');
        item.innerHTML = smoothies[i];
        bot3list.appendChild(item);
    }



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

    // Card 1 bot
    bot1.appendChild(botname1);
    bot1.appendChild(bot1list);
   
    // Card 2
    card2.appendChild(top2);
    card2.appendChild(bot2);
    top2.appendChild(pic2);

    // Card 2 bot
    bot2.appendChild(botname2);
    bot2.appendChild(bot2list);
    // Card 3
    card3.appendChild(top3);
    card3.appendChild(bot3);
    top3.appendChild(pic3);

    // Card 3 bot
    bot3.appendChild(botname3);
    bot3.appendChild(bot3list);

    container.appendChild(main);
}

export {main4} 