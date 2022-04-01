const container = document.getElementById("content");

let header = () =>{
    // .header -> parent
    let header = document.createElement("div");
    header.classList.add("header");

    
    // .header-name -> child of header
    let name = document.createElement("div");
    name.classList.add("header-name");
    

    // .title -> child of header-name
    let title = document.createElement("h1");
    title.innerHTML = 'Zombay';
    

    // .header-links -> child of header
    let headlinks = document.createElement("div");
    headlinks.classList.add("header-links");
    
    //nav-list  -> child of .header-links
    let navlist = document.createElement("ul");
    let items = ['About', 'Our Menu', 'Contact'];

    for (let i =0; i < items.length; i++){
        let item = document.createElement('li');
        item.innerHTML = items[i];
        navlist.appendChild(item);
    }

    //Appendlists
    header.appendChild(name);
    header.appendChild(headlinks);
    headlinks.appendChild(navlist);
    name.appendChild(title);
    headlinks.appendChild(navlist);

    container.appendChild(header);

}

let main = () =>{
    //.main child of #content
    let main = document.createElement("div");
    main.classList.add("main");

    //.main-content child of .main
    let content = document.createElement("div");
    content.classList.add("main-container");

    

    main.appendChild(content);

    container.appendChild(main);
}

let footer = () =>{
    //  .footer child of #content
    let footer = document.createElement("div");
    footer.classList.add("footer");

    // p tag child of footer
    let copyright = document.createElement("p");

    copyright.innerHTML = 'By: Brian';

    //Append within footer
    footer.append(copyright);

    //Append footer to container
    container.appendChild(footer);

}



export { header, main, footer}