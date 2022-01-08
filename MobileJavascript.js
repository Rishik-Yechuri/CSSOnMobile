var mobileDropdownOpened = false;

function openMenuClicked() {
    var dropDownElements = document.getElementById("mobiledropdowncontainer");
    var basicInfo = document.getElementsByClassName('basicinfo');
    if (!mobileDropdownOpened) {
        dropDownElements.style.display = 'block';
        basicInfo[0].style.display = 'none';
        document.getElementById("hamburgerbutton").style.background = "url(exitbutton.png)";
        document.getElementById("hamburgerbutton").style.height = "18px";
        document.getElementById("hamburgerbutton").style.width = "18px";
    } else {
        if ($(window).width() <= 440) {
            basicInfo[0].style.display = 'grid';
        }else{
            basicInfo[0].style.display = 'block'
        }
        dropDownElements.style.display = 'none';
        document.getElementById("hamburgerbutton").style.background = "url(smallhamburgermenu.png)";
        document.getElementById("hamburgerbutton").style.height = "14px";
        document.getElementById("hamburgerbutton").style.width = "20px";
    }
    mobileDropdownOpened = !mobileDropdownOpened;
}

function reportWindowSize() {
    var basicInfo = document.getElementsByClassName('basicinfo');
    if ($(window).width() > 600) {
        basicInfo[0].style.display = 'block';
    } else {
        if (mobileDropdownOpened) {
            basicInfo[0].style.display = 'none';
        } else {
            basicInfo[0].style.display = 'grid';
        }
    }
}

window.onresize = reportWindowSize;