function openMenuClicked() {
    var dropdownElements = document.getElementsByClassName("dropdown");
    var numOfDropdownElements = dropdownElements.length;
    for (var i=0; i<numOfDropdownElements;i++){
        dropdownElements[i].style.display='block';
    }
    var dropdownLinkElements = document.getElementsByClassName("dropdownlink");
    var numOfDropdownLinkElements = dropdownLinkElements.length;
    for (var i=0; i<numOfDropdownLinkElements;i++){
        dropdownLinkElements[i].style.display='block';
    }
}