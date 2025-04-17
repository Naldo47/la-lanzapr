(function(){
    const listElements = document.querySelectorAll(' .menu_item--show');
    const list = document.querySelector('.menu_links');
    const menu = document.querySelector('.menu_hamburger');

    const addClick = ()=>{
       listElements.forEach( element =>{
       element.addEventListener('click', ()=>{

       let subMenu = element.children[1];
       let height = 0;
       element.classList.toggle('menu_item--active');


        if(subMenu.clientHeight === 0){
            height = subMenu.scrollHeight;
        }

        subMenu.style.height = `${height}px`;
        
       });
    });

    }

        const deleteStyleHeight = ()=>{
            listElements.forEach(element=>{
                
                if(element.children[1].getAttribute('style')){
                    element.children[1].removeAttribute('style');
                    element.classList.remove('menu_item--active');
                }    
            });
        }
 

        window.addEventListener('resize', ()=>{
            if (window.innerWidth > 800) {
                deleteStyleHeight();
                if(list.classList.contains('menu_links--show'))
                    list.classList.remove('menu_links--show');
                
            }else{
                addClick();
            }
        });

        if(window.innerWidth <= 800) {
            addClick();
        }

       menu.addEventListener('click', ()=> list.classList.toggle('menu_links--show'));



})();




document.addEventListener("DOMContentLoaded", function () {
    const slideshows = document.querySelectorAll('.side-slideshow');
  
    slideshows.forEach(slideshow => {
      const images = slideshow.querySelectorAll('.side-img');
      let index = 0;
  
      setInterval(() => {
        images[index].classList.remove('active');
        index = (index + 1) % images.length;
        images[index].classList.add('active');
      }, 3000);
    });
  });
  




// let slideIndex = 0;

// function showSlides() {
//     const slides = document.querySelectorAll(".slide");
//     slides.forEach(slide => slide.style.display = "none");

//     slideIndex++;
//     if (slideIndex > slides.length) {
//         slideIndex = 1;
//     }

//     slides[slideIndex - 1].style.display = "block";
//     console.log("Mostrando slide", slideIndex); // 👈 Verifica si esto aparece

//     setTimeout(showSlides, 4000);
// }

// showSlides();
