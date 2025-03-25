jQuery(document).ready(function(){
    

    let body = document.querySelector('body');
    let dummyBody = document.querySelector('.dummy-body');
    let navHeader = document.getElementById('nav1-header');
    let navToggler = navHeader.querySelector('.nb-toggler');
    let smNav = navHeader.querySelector('.nav-mobile-canvas');
    let navTogglerIcon = navHeader.querySelector('.nbbar-toggler-icon i')
    let searchWrapper = document.querySelector('.sm-search-wrapper form')
    let searchBtn = document.querySelector('.sm-search');
    
    //sticky Header flip
    //Unlock this code on your website
    //  window.addEventListener('scroll', onscroll_function);
    //  function onscroll_function(){
    //      if (window.scrollY > 50){
    //          navHeader.classList.add('nav-header-sticky');
    //      } else {
    //          navHeader.classList.remove('nav-header-sticky');
    //      }
    // }
    
    
    
    // Remove this code on your website 
    //  dummyBody.addEventListener('scroll', () => {
    //   let  dummyBodyHeight = dummyBody.getBoundingClientRect();
    //        console.log(`The Height is : ${dummyBodyHeight.height}`);
    //  })
    
    
    // show/hide Mobile Nav 
    navToggler.addEventListener('click',  show_hide_Nav);
    
    function show_hide_Nav(e){
        smNav.classList.toggle('navshow')
        navToggler.classList.toggle('navclose')
    }
    
    
    // show search on click on search icon 
    searchBtn.addEventListener('click', () => {
        searchWrapper.classList.toggle('showsearch')
    })
        
        });