//Contact Form Responce

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.contact-right form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert("Thank you for contacting me! I will get back to you soon.");
        form.reset();
    });
});

// Tabs New
document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.tab_btn');
    const line = document.querySelector('.line');
    const contents = document.querySelectorAll('.content'); 
    
    const setLinePosition = (tab) => {
        line.style.width = tab.offsetWidth + 'px';           
        line.style.left = tab.offsetLeft + 'px';
    };
    
    const showContent = (index) => {
        contents.forEach((content, i) => {
        content.classList.toggle('active', i === index); 
        });
    };
    
    const updateActiveTab = (index) => {
        tabs.forEach((tab, i) => {
        tab.classList.toggle('active', i === index); 
        });
    };

    if (tabs.length > 0) {
        setLinePosition(tabs[0]);
        showContent(0);
        updateActiveTab(0); 
    }
    
    // Add click event listeners to each tab
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function() {
            setLinePosition(this);
            showContent(index);
            updateActiveTab(index);
        });
    });
});


//<!-- Cursor pointer -->
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {

    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // cursorOutline.style.left = `${posX}px`;
    // cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});


//<!-- Progress Round -->
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else{
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#ff004f ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;



//<!-- Tabs -->
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementByID(tabname).classList.add("active-tab");
    }



//<!-- Side Menu -->
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}