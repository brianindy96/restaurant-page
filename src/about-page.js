const container = document.getElementById("content");


let main3 = () =>{
    //.main child of #content
    let main = document.createElement("div");
    main.classList.add("main");

    //.main-content child of .main
    let content = document.createElement("div");
    content.classList.add("main-container2");

    //div description
    let aboutdes = document.createElement("div");
    aboutdes.classList.add("about-title");

    //h1 child of aboutdes
    let titel = document.createElement("h1");
    titel.innerHTML = "Our Restaurant is celebrating it's 5000th year."

    //h2 child of aboutdes
    let descrip = document.createElement("h2");
    descrip.innerHTML = "    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>Adipisci dolorum voluptate sunt veniam nam accusamus vel aliquam dignissimos beatae, deleniti ut dolores ducimus ratione illo unde soluta consequatur obcaecati commodi aliquid nobis quod! Ipsum recusandae quod nemo eum nulla expedita quae perferendi<br>s porro! Totam iusto modi ipsa velit consectetur nemo?"

    //img child of aboutdes
    let img2 = document.createElement("img");
    img2.classList.add("restaurant");
    img2.src = "../pics/restaurant.jpeg";

    main.appendChild(content);
    content.appendChild(aboutdes);
    aboutdes.appendChild(titel);
    aboutdes.appendChild(descrip);
    aboutdes.appendChild(img2);
    
    container.appendChild(main);
}

export {main3} 