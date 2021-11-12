let exp1 = document.getElementById("exp1")

let exp2 = document.getElementById("exp2")

let btn = document.getElementById("oprtr")

let checkbtn = document.getElementById("resultbtn")

let result = document.getElementById("result")

let statusresult = document.getElementById("status")


let first = document.getElementById("first")


let second = document.getElementById("second")

let total = 0;

let right = 0;

let last = document.getElementById("lastresult");

let restart = document.getElementById("restart")


let min = document.getElementById("mint")

let sec = document.getElementById("sec")


let firsttop = document.getElementById("top")

let start = document.getElementById("startbtn");

let finalstart = document.getElementById("finalstart")

let timesection = document.getElementById("timesection")


let timeval = document.querySelectorAll(".time");


let seco = "0" + 0;
let mint = "0" + 0;

sec.innerHTML = seco;
min.innerHTML = mint;

let a;
start.addEventListener("click", function () {
    timeval.forEach((val) => {
        if (val.checked) {

            a = val.getAttribute("data-time")
            mint = a;
            min.innerHTML = "0" + mint;


        }

        return true;


    })


    first.style.display = "block"
    firsttop.style.display = "none";
    timesection.style.display = "block";
    animation()
})
let timeout;
function show() {




    timeout = 60000 * mint;

    if (timeout == 0) {
        setTimeout(final, 60000)
    }
    else {
        setTimeout(final, timeout)
    }

}


function timer() {


    seco = seco - 1

    if (seco < 0) {
        if (mint == 0) {
            mint = 0;
            min.innerHTML = mint
        } else {
            mint = mint - 1;

        }
        seco = 59;
    }


    if (mint < 10) {
        min.innerHTML = "0" + mint;
    }
    if (seco < 10) {
        seco = "0" + seco;
    }
    sec.innerHTML = seco;

}


finalstart.addEventListener("click", function () {

    setInterval(timer, 1000)

    this.style.display = "none";

    timesection.style.display = "block";

    checkbtn.style.display = "block";

    show()

})

let process = () => {

    let max = 100;

    let min = 40;

    let first =

        Math.floor(Math.random() * (max - min + 1)) + min;
    exp1.value = first;

    let second = Math.floor(Math.random() * (40 - 1 + 1)) + 1;

    exp2.value = second;

    let oprtr = "+-*%";

    let z = Math.floor(Math.random() * ((oprtr.length - 1) - 0 + 1)) + 0;


    btn.value = oprtr[z];


}

window.addEventListener("load", process)

checkbtn.addEventListener("click", checking)




function checking() {
    let val = +result.value;
    let sum = eval(+exp1.value + btn.value + +exp2.value);




    if (result.value.trim().length != 0) {

        total = total + 1;


        if (val == sum) {


            right = right + 1;
        }
        if (total <= 5) {
            statusresult.innerHTML = ` Answer fast you attempt only ${total} question`
        }
        else {
            statusresult.innerHTML = "";
        }


        process();
    }
    else {
        alert("write something")
    }
    result.value = "";


    last.innerHTML = `Your Score is.       ${right} / ${total}`

}





function final() {
    first.style.display = "none";
    second.style.display = "block";
    timesection.style.display = "none"
}



restart.addEventListener("click", function () {
    window.location.reload();
    first.style.display = "none";
    second.style.display = "none";
    firsttop.style.display = "block"


})





//anime.js starts from here



function animation() {
    var animate =
        anime({
            targets: "#timesection",
            translateX: [800, 0],
            duration: 2000,
            delay: 1000
        })

    anime({
        targets: "#exp1",
        translateX: [-900, 0],
        duration: 2000,
        delay: 1000
    })

    anime({
        targets: "#exp2",
        translateX: [900, 0],
        duration: 2000,
        delay: 1000
    })

    anime({
        targets: ".oprtrsign",
        translateY: [-500, 0],
        duration: 2000,
        delay: 1000
    })

    anime({
        targets: ".equal",
        translateY: [-500, 0],
        duration: 2000,
        delay: 1000
    })

    anime({
        targets: "#result",
        translateY: [500, 0],
        duration: 2000,
        delay: 1000
    })

    anime({
        targets: "#finalstart",
        translateY: [500, 0],
        duration: 2000,
        delay: 1000
    })
}



introJs().setOptions({
    steps: [{
        title: "<h2>Select Timing</h2>",
        element: document.querySelector('#dropdownMenuButton1'),
        intro: "Click here to select Timing!"
    }]
}).start();
