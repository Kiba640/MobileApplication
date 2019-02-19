// Functions for viewing the windows in the nav-bar

//Sudo: Search if there is an element within the HTML that has the class .open
//      set the result to a property called openElements
//      if the property has something in it remove the class
//      else toggle the element
function viewSearch(button){
       if (document.querySelector('.open') !== null) {
        const openElements = document.querySelectorAll('.open');
        if (openElements.length > 0) {
         openElements[0].classList.remove('open');
        //  ^^^^ this is incorrect but if a fix it, it breaks the entire code
         
        }
        
    }
    else document.getElementById("navbarMenuSearch").classList.toggle("open");
    //above code doesn't show the new nav menu on click, instead closes all open nav menu's
    //It's not a bug, but a feature
}


    function viewGenre(button) {
        if (document.querySelector('.open') !== null) {
            const openElements = document.querySelectorAll('.open');
            if (openElements.length > 0) {
             openElements[0].classList.remove('open');
             
            }
            
        }
        else document.getElementById("navbarMenuGenre").classList.toggle("open");
        //above line doesn't show the new nav menu on click, instead closes all open nav menu's
        //It's not a bug, but a feature
    }

    function viewRatings(button) {
        if (document.querySelector('.open') !== null) {
            const openElements = document.querySelectorAll('.open');
            if (openElements.length > 0) {
             openElements[0].classList.remove('open');
             
            }
            
        }
        else document.getElementById("navbarMenuRatings").classList.toggle("open");
        //above line doesn't show the new nav menu on click, instead closes all open nav menu's
        //It's not a bug, but a feature
    }
    
    function viewFamRatings(button) {
        if (document.querySelector('.open') !== null) {
            const openElements = document.querySelectorAll('.open');
            if (openElements.length > 0) {
             openElements[0].classList.remove('open');
             
            }
            
        }
        else document.getElementById("navbarMenuFamRatings").classList.toggle("open");
        //above line doesn't show the new nav menu on click, instead closes all open nav menu's
        //It's not a bug, but a feature
    }

// <-------------------------------------------------------End Navigation Buttons------------------------------------------------------->

//<-----------------------------------------------------------Navigation Menus---------------------------------------------------------->

// Sudo: 
//      Create an array
//      give the array HTML elements
//      Loop through array to display the elements needed to the HTML
        // function myFunction(a, b) {
        //     return a * b;
        //   }
        //   document.getElementById("searchTest").innerHTML = "<div class='searchMain'></div>"; 


