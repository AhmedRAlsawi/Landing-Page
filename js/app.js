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


let navBarHeight = ()=> document.getElementsByClassName("navbar__menu")[0].clientHeight;



// li
let listItem;

sectionArr.forEach(sectionDetails => 
    {
        listItem = document.createElement("LI");
        let sectionID = sectionDetails.getAttribute("id");
        let sectionName = sectionDetails.getAttribute("data-nav");
        
        // Scroll to anchor ID
        // "<a href=#"+sectionID+ " class='menu__link'>"+sectionName+"</a>" 
        listItem.innerHTML=`<a href="#${sectionID}" class='menu__link'>${sectionName}</a>`;
        myList.appendChild(listItem);
    
    });

    // keep comment : top of element between top and bottom of viewport || bottom of element between top and bottom of viewport || top of element before top of view && bottom of element > bottom of view

//Added
//Scroll behavior dynamically
let anchor = document.querySelectorAll("a");
for (element of anchor)
{
    element.addEventListener("click", (e) =>
    {
      e.preventDefault();

      const secName = document.getElementById(
        e.target.getAttribute("href").substring('#section'.length)
      );

      // get x and y for the section
      let idx = parseInt( e.target.getAttribute("href").substring('#section'.length))-1;
      console.log("idx: ",idx);
      let rect = sectionArr[idx].scrollHeight;
      window.scrollTo({top: rect-navBarHeight(), behavior:'smooth'});
    //   secName.scrollIntoView({
    //     behavior: "smooth",
    //     block: "start",
    //   });
    });
};

// Done : To add the Active class to the list item
let theList = document.getElementsByClassName("menu__link");

for (li of theList)
{
    li.addEventListener("click",(e) =>
    {
        for(let i = 0 ; i < theList.length ; i++)
        {
            theList[i].classList.remove('nav_background');
        }
        e.target.classList.add('nav_background');
    });
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
// Done : To add the Active class to the section in viewport
document.onscroll = function()
{
    for (sectionDetails of sectionArr)
    {
        //sectionDetails = sectionArr[1];
        //const topRect = sectionDetails.getBoundingClientRect();
        //console.log (topRect)
        if (isElementInViewport(sectionDetails) || isViewportInElement(sectionDetails))
        {
            sectionDetails.classList.add("your-active-class");
            console.log("section is active");
        }
        else
        {
            sectionDetails.classList.remove("your-active-class");
        }
    }
}

function isViewportInElement (el) {

    var rect = el.getBoundingClientRect();
    console.log('one');
    console.log(rect.top, 0);
    console.log(rect.left, 0);
    console.log(rect.bottom, (window.innerHeight || document.documentElement.clientHeight));
    console.log(rect.right, (window.innerWidth || document.documentElement.clientWidth));

    return (
        rect.top <= 0 &&
        rect.left >= 0 &&
        (rect.bottom + navBarHeight()) >= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}


function isElementInViewport (el) {

    var rect = el.getBoundingClientRect();
    // console.log('two');
    // console.log(rect.top >= 0);
    // console.log(rect.left >= 0);
    // console.log(rect.bottom, (window.innerHeight || document.documentElement.clientHeight));
    // console.log(rect.right <= (window.innerWidth || document.documentElement.clientWidth));
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        (rect.bottom ) <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
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
    //Added
    // to remove the highlight from all list items
    for(let i = 0 ; i < theList.length ; i++)
        {
            theList[i].classList.remove('nav_background');
        }
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