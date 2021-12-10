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

// build the nav

// ul
var myList = document.getElementById("navbar__list");

// li
var listItem;

// var sectionArr = document.getElementsByClassName("landing__container");
// var count=1;

// to capture sections in array
var sectionArr = document.querySelectorAll("section");

// var sectionID = section.getAttribute('id');
// console.log(section);

for (sectionDetails of sectionArr)
{   
    listItem = document.createElement("LI");
    var sectionID = sectionDetails.getAttribute("id");
    var sectionName = sectionDetails.getAttribute("data-nav");
    
    // Scroll to anchor ID
    listItem.innerHTML="<a href=#"+sectionID+ " class='menu__link'>"+sectionName+"</a>";
    // count++;
    myList.appendChild(listItem);
    // console.log(listItem);
    // listItem.appendChild(sec);
}

listItem.onclick=function()
    {
        for (sectionDetails of sectionArr)
        if (!(sectionDetails.classList.contains("your-active-class")))
        {
            sectionDetails.classList.add("your-active-class");
        }
    }

var body = document.getElementById("bodyId");
var x = body.getBoundingClientRect();

body.onscroll = function()
    {  
        
        if ( x.top != 2288.34375)
        {
            btn.style.opacity="1";
        }
    }


// var body = document.getElementById("bodyTest")
// var theEvent= body.addEventListener("click",function(e)
// {
//     var y = e.clientY;
//     y = 52;
// });



// Add class 'active' to section when near top of viewport

// button feature to scroll to the top 
var btn = document.getElementById("topBtn");
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