document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.dropdown-content');
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownLink = document.querySelector('.dropdown-link-div');
    
    if (!dropbtn.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = 'none';
        dropdownLink.classList.remove('for-dropwodn-link');
        dropdownLink.classList.add('for-dropwodn-link-start');
    } else if (dropbtn.contains(event.target)) {
        dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
        dropdownLink.classList.remove('for-dropwodn-link-start');
        dropdownLink.classList.add('for-dropwodn-link');
    }   
});
window.addEventListener('scroll', function(){
    var navbar = this.document.querySelector('.navbar');
    navbar.classList.toggle('when-main', this.scrollY > 1050);

    var hcfa = this.document.querySelector('.filler-about');
    var hcfst = this.document.querySelector('.filler-send-to');
    var hcf1 = this.document.querySelector('#hcf1');

    if(this.window.scrollY > 0){

        hcfa.classList.remove('fill-top-start');
        hcfa.classList.add('fill-top-scroll');
        hcfst.classList.remove('fill-top-start');
        hcfst.classList.add('fill-top-scroll');
        
        hcf1.classList.remove('hfd-start');
        hcf1.classList.add('hfd-scroll');
    }else{
        hcfa.classList.remove('fill-top-scroll');
        hcfa.classList.add('fill-top-start');
        hcfst.classList.remove('fill-top-scroll');
        hcfst.classList.add('fill-top-start');
        
        hcf1.classList.remove('hfd-scroll');
        hcf1.classList.add('hfd-start');
    };
});

function exploreInterior() {
    var div = document.querySelector('.main');
    if(div){
        div.scrollIntoView({behavior: 'smooth'})
    }
}

var mainVideo = document.querySelector('#mainVideo');
var heighT = window.innerHeight; 
var widtH = window.innerWidth; 

function mainVideoInitial(){
    const minWidth = 1100;
    const initialWidth = mainVideo.clientWidth;
    const scaleVideo = Math.max(.55 + this.scrollY * .0004, minWidth / initialWidth);
    const scaleVideoMobile = Math.max(.75 + this.scrollY * .00015, minWidth / initialWidth);
    if(heighT < widtH){
        mainVideo.style.transform = `scaleX(${scaleVideo}) translate(0,-23vh)`;
    }else{
        mainVideo.style.transform = `scaleX(${scaleVideoMobile}) translate(0,-17vh)`;
    }
}
const gallerySection = document.querySelector('.gallery');
const photoGallery = document.querySelector('.photo-gallery');

function photoGalleryFunc(){
    const galleryTrans = 0 - this.scrollY * .1;
    if(heighT < widtH){
        photoGallery.style.transform = `translate(${galleryTrans}px)`;
        gallerySection.style.transform = 'translate(0,-20vh)';
    }else{
        photoGallery.style.transform = `translate(${galleryTrans}px)`;
        gallerySection.style.transform = 'translate(0,-15vh)';
    }
}

window.addEventListener('scroll', photoGalleryFunc);
window.addEventListener('scroll', mainVideoInitial);



document.addEventListener('DOMContentLoaded', function () {
    const options = {
        threshold: .5
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('visible');
            }else if(!entry.isIntersecting){
                entry.target.classList.remove('visible');
            }
        });
    }, options);

    var movIMG = document.querySelectorAll('.movingImage');
    movIMG.forEach(element => {
        observer.observe(element);
    });
    var movIMG1 = document.querySelectorAll('.movingImageV1');
    movIMG1.forEach(element => {
        observer.observe(element);
    });
});

// mobile version ////////////////////////////////////////////////////////////////////

function Mobile(){
var viewportHeight = window.innerHeight;
    var viewportWidth = window.innerWidth;
    var page1Background = document.querySelector('.hero');
    var logo = document.getElementById('logo');
    var h3Logo = document.getElementById('h3-logo');
    
    function removeNavbarLinks() {
        var links = document.querySelectorAll('.navbar-fillers');
        links.forEach(function(element) {
            element.remove();
        });
    }
    function removeScrollBTN() {
        var scrollBtn = document.querySelectorAll('#scrollBtn');
        scrollBtn.forEach(function(element) {
            element.remove();
        });
    }
    
    // BM stands for Burger Menu /////////////////////////////////////////////////////
    var navbar = document.querySelector('.navbar');

    function switchToBM() {
        var burgerMenu = document.createElement('div');
        var iconBM = document.createElement('img');
        
        iconBM.className = 'burger-icon';
        iconBM.src = '_icons/menu.png';

        iconBM.style.height = '3vh';
        iconBM.style.width = '3vh';
        iconBM.style.margin = '0 8vw 0 0'
        iconBM.style.filter = 'invert(100)';

        burgerMenu.appendChild(iconBM);
        navbar.appendChild(burgerMenu);

        var navbarMenu = document.querySelector('.navbar-menu');
        var menuOpened = document.createElement('div');
        menuOpened.className = 'menu-opened';
        navbarMenu.appendChild(menuOpened);

        var openedMenu = document.querySelector('.menu-opened');

        
        iconBM.addEventListener('click', function() {
            menuOpened.classList.remove('menu-closeAnim');
            menuOpened.classList.add('menu-openAnim');
            
            navbarMenu.style.zIndex = '999';
        
            var existingMenuNavbar = document.querySelector('.menu-navbar');
            if (!existingMenuNavbar) {
                var menuNavbar = document.createElement('div');
                var closeBtnDiv = document.createElement('div');
                var closeIMG = document.createElement('img');
        
                menuNavbar.className = 'menu-navbar';
                closeBtnDiv.className = 'menu-close-btn';
                closeIMG.src = '_icons/close-button.png';
                closeIMG.style.height = '2vh';
                closeIMG.style.width = '2vh';
                closeIMG.style.marginTop = '3vh';
                closeIMG.style.marginRight = '8.5vw';
                closeIMG.style.filter = 'invert(100)';
                // closeIMG.style.filter = 'invert(28%) sepia(92%) saturate(335%) hue-rotate(63deg) brightness(93%) contrast(88%)';
        
                closeIMG.addEventListener('click', function(){
                    menuOpened.classList.remove('menu-openAnim');
                    menuOpened.classList.add('menu-closeAnim');
        
                    var closeAnim = document.querySelector('.menu-closeAnim');
                    closeAnim.addEventListener('animationend', function(){
                        navbarMenu.style.zIndex = '-999';
                    }, { once: true });
                });
        
                closeBtnDiv.appendChild(closeIMG);
                menuNavbar.appendChild(closeBtnDiv);
                openedMenu.appendChild(menuNavbar);
                
                var mappingLinks = document.createElement('div');
                var mapLink1 = document.createElement('a');
                var mapLink2 = document.createElement('a');
                var mapLink3 = document.createElement('a');
                var mapLink4 = document.createElement('a');
                
                mappingLinks.className = 'linked-map';

                mapLink1.className = 'map-link';
                mapLink2.className = 'map-link';
                mapLink3.className = 'map-link';
                mapLink4.className = 'map-link';
                
                mapLink1.href = 'index.html';
                mapLink2.href = 'nea-fokea.html';
                mapLink3.href = 'sightsees.html';
                mapLink4.href = 'contacts-mobile-os.html';

                mapLink1.textContent = 'home page';
                mapLink2.textContent = 'about nea fokea';
                mapLink3.textContent = 'sightsees';
                mapLink4.textContent = 'contacts';

                mappingLinks.appendChild(mapLink1);
                mappingLinks.appendChild(mapLink2);
                mappingLinks.appendChild(mapLink3);
                mappingLinks.appendChild(mapLink4);
                openedMenu.appendChild(mappingLinks);
            }
        });        
    }

    var heroContentHelper = document.getElementById('hch');
    var heroContent = document.querySelector('.hero-content');
    var heroFiller = document.querySelector('.hero-filler');
    var fillerAbout = document.querySelector('.filler-about');
    var fillerOther = document.querySelector('.filler-other');
    var filaSpecial = document.querySelector('.filaSpecial');
    var mobileFillerAbout = document.getElementById('mobileFillerAbout');
    var mobileFillerAboutH1 = document.getElementById('mobileFillerAboutH1');
    var mobileFillerBottom = document.getElementById('mobileFillerBottom');
    var mobileFillerBottomH2 = document.getElementById('mobileFillerBottomH2');
    
    // main vars //////////////////////////////////////////////////////////////////////////////////

    var mainH1 = document.getElementById('mainH1');
    var galleryH1 = document.getElementById('galleryH1');
    var galleryIMG = document.querySelectorAll('.pg-photos');
    var inJsMainContent = document.querySelectorAll('.inJsMainContent');
    var mcDiv = document.querySelectorAll('#mcDiv');
    var inJsMovingIMG = document.querySelectorAll('.movingImage');
    
    // condition start ////////////////////////////////////////////////////////////////////////////

    if(viewportHeight > viewportWidth){
        page1Background.style.background = 'url(_photos/3-page.jpg)';
        page1Background.style.backgroundReapeat = 'no-repeat';
        page1Background.style.backgroundSize = 'cover';
        page1Background.style.height = '100dvh';        
        removeNavbarLinks();
        removeScrollBTN();
        switchToBM();

        // font sizes /////////////////////////////////////////////////////////////////////////////
            // titles –– 40px
            // plain text –– 18px

        logo.style.fontSize = '40px';
        mobileFillerAbout.style.fontSize = '18px';
        mobileFillerAboutH1.style.fontSize = '40px';
        mobileFillerBottom.style.fontSize = '18px';
        mobileFillerBottomH2.style.fontSize = '40px';
    
            // main content font sizes ////////////////////////////////////////////////////////////
    
        mainH1.style.fontSize = '40px';
        galleryH1.style.fontSize = '40px';
    
        // font sizes end /////////////////////////////////////////////////////////////////////////

        logo.style.lineHeight = '1.5';
        h3Logo.style.transform = 'translate(0,-1.5vh)';
        heroContent.style.position = 'unset';
        heroContentHelper.style.width = '0';
        filaSpecial.style.all = 'unset';
        heroFiller.style.width = '100%';
        fillerAbout.style.width = '90%';
        fillerAbout.style.marginBottom = '5%';
        fillerAbout.style.marginLeft = '5%';
        mobileFillerAboutH1.style.fontWeight = '300';
        fillerOther.style.width = '90%';
        fillerOther.style.marginLeft = '5%';
        fillerOther.style.padding = '0';
        mobileFillerBottom.style.textAlign = 'left';
        
        // main content ///////////////////////////////////////////////////////////////////////////
        
        mainH1.style.transform = 'translate(-4vw,-9vh)';
        galleryH1.style.marginLeft = '11vw';
        galleryH1.style.marginBottom = '2vh';
        galleryH1.style.color = 'black';
        photoGallery.style.height = '10vh';
        galleryIMG.forEach(galleryIMG => {
            galleryIMG.style.width = '35%';
        });
        inJsMainContent.forEach(inJsMainContent => {
            inJsMainContent.style.height = 'fit-content';
            inJsMainContent.style.width = 'fit-content';
            inJsMainContent.style.flexDirection = 'column';
            inJsMainContent.style.justifyContent = 'center';
            inJsMainContent.style.alignItems = 'start';
        });
        mcDiv.forEach(mcDiv => {
            mcDiv.style.width = '30%';
            mcDiv.style.marginBottom = '3vh';
        })
        inJsMovingIMG.forEach(inJsMovingIMG => {
            inJsMovingIMG.height = '30vh';
            inJsMovingIMG.width = '57vw';
        });
    }

    // condition end ////////////////////////////////////////////////////////////////////////////

}
Mobile();