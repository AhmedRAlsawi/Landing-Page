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

//Scroll behavior dynamically
window.onload=function()
    {
        document.getElementById("html").style.scrollBehavior="smooth";
    };

// build the nav

// ul
// Globabl variable
var myList = document.getElementById("navbar__list");

// li
let listItem;


// to capture sections in array
const sectionArr = document.querySelectorAll("section");


for (sectionDetails of sectionArr)
{   
    listItem = document.createElement("LI");
    let sectionID = sectionDetails.getAttribute("id");
    let sectionName = sectionDetails.getAttribute("data-nav");
    
    // Scroll to anchor ID
    listItem.innerHTML="<a href=#"+sectionID+ " class='menu__link'>"+sectionName+"</a>";
    myList.appendChild(listItem);
    
}

// Added : To add the Active class to the list item
let theList = document.getElementsByClassName("menu__link");

for (li of theList)
{
    li.addEventListener("click",function()
    {
        for(let i = 0 ; i < theList.length ; i++)
        {
            theList[i].classList.remove('nav_background');
        }
        this.classList.add('nav_background');
        
    })
};


let body = document.getElementById("bodyId");
let x = body.getBoundingClientRect();

body.onscroll = function()
    {  
        
        if ( x.top != 2288.34375)
        {
            btn.style.opacity="1";
        }
    }


// Add class 'active' to section when near top of viewport
// Added : To add the Active class to the section in viewport
document.onscroll = function()
{
    for (sectionDetails of sectionArr)
    {
        if (sectionDetails.getBoundingClientRect().top >= 0 && sectionDetails.getBoundingClientRect().top <= 0.6)
        {
            sectionDetails.classList.add("your-active-class");
        }
        else
        {
            sectionDetails.classList.remove("your-active-class");
        }
    }
}

// button feature to scroll to the top 
let btn = document.getElementById("topBtn");
btn.onclick=function()
{
    document.body.scrollTo(0,0);
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