// Functions for viewing the windows in the nav-bar
function viewSearch(){
    // if eventlistner === onclick viewSearch then null == .open all?
    if (document.querySelector('.open') !== null) {
       const openElements = document.querySelector('.open');
       openElements[0].classList.remove('open');
    }
    document.getElementById("navbarMenuSearch").classList.toggle("open");
}

    function viewGenre() {
    document.getElementById("navbarMenuGenre").classList.toggle("open");
    let viewGenreFunc = true;
    }

    function viewRatings() {
    document.getElementById("navbarMenuRatings").classList.toggle("open");
    let viewRatingsFunc = true;
    }
    
    function viewFamRatings() {
    document.getElementById("navbarMenuFamRatings").classList.toggle("open");
    let viewFamRatingsFunc = true;
    }

    function runSearch() {
        // let newURL = insert code parameters so that when a search function is clicked it shows the URL needed;
        // window.location.replace(newURL);
    }
