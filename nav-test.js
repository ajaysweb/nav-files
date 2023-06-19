function toggleMenuOpacity() {
  var mainNavHolder = document.querySelector('.main-nav-holder');
  var menuOverlay = document.querySelector('.menu-overlay');
  
  if (mainNavHolder.style.opacity === '0') {
    mainNavHolder.style.opacity = '1';
    menuOverlay.style.opacity = '1';
  } else {
    mainNavHolder.style.opacity = '0';
    menuOverlay.style.opacity = '0';
  }
}

