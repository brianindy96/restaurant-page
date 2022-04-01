import {main, footer, header} from "./site-template"

const container = document.getElementById("content");

// const main = () =>{
//     //.main child of #content
//     let main = document.createElement("div");
//     main.classList.add("main");

//     //.main-content child of .main
//     let content = document.createElement("div");
//     content.classList.add("main-container");

//     main.appendChild(content);


//     container.appendChild(main2);

// }

const main2 = () =>{
    //.main child of #content
    let main = document.createElement("div");
    main.classList.add("main");

    //.main-content child of .main
    let content = document.createElement("div");
    content.classList.add("main-container");

    //main-left child of .main-content
    let left = document.createElement("div");
    left.classList.add("main-left");

    //main-right child of .main-content
    let right = document.createElement("div");
    right.classList.add("main-right");

    //div + img child 
    let imgdiv = document.createElement("div");
    imgdiv.classList.add("img-container");
    let img = document.createElement("img");
    img.src = "../pics/zombie.jpeg"
    
    //h1 h2 h3 h4 child of .main-left
    let head1 = document.createElement("h1");
    head1.classList.add("head-1")
    head1.innerHTML = 'Welcome to Zombay Restaurant.'
    let head2 = document.createElement("h2");
    head2.classList.add("head-2");
    head2.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cumque reprehenderit placeat. Nihil consequuntur eum accusamus inventore, harum ad animi!'
    let head3 = document.createElement("h3");
    head3.classList.add("head-3");
    head3.innerHTML = 'Lorem ipsum dolor sit amet.'
    let head4 = document.createElement("h4");
    head4.classList.add("head-4");
    head4.innerHTML = "lkafsjldjfals jflasd <br>Lorem ipsum, dolor sit amet consectetur adipisicing el<br>it. Nesciunt, qui ad, cum ducimus eaque ratione corrupti beatae inventore, nemo expedita quo sint nihil id nulla amet neque cupiditate delectus blanditiis? Voluptatum distinctio hic sequi quasi numquam impedit repellat aut cum ipsa est, similique ea dicta. Aspernatur maiores aliquam<h1>eos quia?flaksjdflaksjd lfkajsl kfjalskd alks<br> d</h1> eos quia?flaksjdflaksjd lfkajsl kfjalskd alks<br> dflaskjd f"

    


    //Appending within main
    main.appendChild(content);
    content.appendChild(right);
    content.appendChild(left);
    left.appendChild(imgdiv);
    imgdiv.appendChild(img);
    right.appendChild(head1)
    right.appendChild(head2);
    right.appendChild(head3);
    right.appendChild(head4);

    //Appending main
    container.appendChild(main);
}

export {main2}

