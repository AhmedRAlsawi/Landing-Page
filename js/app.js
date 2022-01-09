/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// to capture sections in array
const sectionArr = document.querySelectorAll("section");

let myList = document.getElementById("navbar__list");

// li
let listItem;


for (sectionDetails of sectionArr)
{   
    listItem = document.createElement("LI");
    let sectionID = sectionDetails.getAttribute("id");
    let sectionName = sectionDetails.getAttribute("data-nav");
    
    // Scroll to anchor ID
    listItem.innerHTML = `<a href="#${sectionID}" class='menu__link'>${sectionName}</a>`;
    myList.appendChild(listItem);
    
}

//Added
//Scroll behavior dynamically
let anchor = document.querySelectorAll("a");
for (element of anchor)
{
    element.addEventListener("click", function (e)
    {
      e.preventDefault();

      const secName = document.getElementById(
        this.getAttribute("href").substring(1)
      );
      secName.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
};

// Done : To add the Active class to the list item
let theList = document.getElementsByClassName("menu__link");

let body = document.getElementById("bodyId");
let x = body.getBoundingClientRect();

document.onscroll = function()
    {  
        
        if ( x.top != 2288.34375)
        {
            btn.style.opacity="1";
        }
    }


// Add class 'active' to section when near top of viewport
// Done : To add the Active class to the section in viewport
window.onscroll = function()
{
    for (const sectionDetails of sectionArr)
    {
        const sectionTop = sectionDetails.getBoundingClientRect().top;
        const link = document.querySelector(`a[href="#${sectionDetails.id}"]`);
        if (0 <= sectionTop && sectionTop <= 300)
        {

            sectionDetails.classList.add("your-active-class");
            link.classList.add("active");
            
        }
        else
        {
            sectionDetails.classList.remove("your-active-class");
            link.classList.remove("active");
        }
    }
}

// button feature to scroll to the top 
let btn = document.getElementById("topBtn");
btn.onclick=function()
{
    //Added
    document.body.scroll({
        top:0,
        behavior:"smooth"
    });
};
btn.onmouseover=function()
{
    btn.style.opacity="1";
};
btn.onmouseleave=function()
{
    btn.style.opacity="0.1";
};


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active