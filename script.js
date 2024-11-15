let  heading = document.getElementById("head")
heading.innerText= "You have been HACKED !";


// heading.innerHTML="<b>You have been HACKED !</b>";
heading.style.color="orange";

let para = document.getElementsByClassName("text");
// para[0].style.border= "3px solid blue"
// para[1].setAttribute("hidden",true)

// para[1].removeAttribute("hidden",true)


// let a = document.querySelector("#head");
// a.innerText= "HelloWorld";

let b = document.querySelector("div p");
b.style.color= "blue";

let c = document.querySelectorAll("div p");
c.forEach(item=> {
    item.style.border= "3px solid brown";
})



function changelogo() {
    document.getElementById("logo").src = "./images/image 2.jpg";
}


function reset() {
    document.getElementById("logo").src = "./images/image 1.png";
}