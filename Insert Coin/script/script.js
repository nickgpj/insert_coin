function sendToFAQ() {
    window.location.href="faq.html"
}

function sendToRegSuccess() {
    window.location.href="register-success.html"
}

function sendToHome() {
    window.location.href="homepage.html"
}

function sendToContactSuccess() {
    window.location.href="contact-success.html"
}

//FAQ
const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const q3 = document.getElementById("q3");
const q4 = document.getElementById("q4");

function question1() {
    if (q1.style.visibility === "hidden") {
        q1.style.visibility = "visible";
    }
    else {
        q1.style.visibility = "hidden";
    }
}

function question2() {
    if (q2.style.visibility === "hidden") {
        q2.style.visibility = "visible";
    }
    else {
        q2.style.visibility = "hidden";
    }
}

function question3() {
    if (q3.style.visibility === "hidden") {
        q3.style.visibility = "visible";
    }
    else {
        q3.style.visibility = "hidden";
    }
}

function question4() {
    if (q4.style.visibility === "hidden") {
        q4.style.visibility = "visible";
    }
    else {
        q4.style.visibility = "hidden";
    }
}


//alert("working");