const container = document.getElementById("content");

let main5 = () =>{
    //.main child of #content
    let main = document.createElement("div");
    main.classList.add("main");

    //.main-content child of .main
    let content = document.createElement("div");
    content.classList.add("main-container");

    

    main.appendChild(content);

    container.appendChild(main);
}

export {main5};