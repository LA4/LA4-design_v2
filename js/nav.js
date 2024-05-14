// barre de navigation
(function(){

    // constantes
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    // menu items
    const creationMenu = document.querySelector('.creation_menu');
    const contactMenu = document.querySelector('.contact_menu');
    
    // header name
    const headerName = document.querySelector('.header-name');
    


// ouvrir/fermer le menu

        burger.addEventListener('click',function(e){
            e.preventDefault();
            
            menu.classList.toggle('toggle');
        
        });
      
// fermeture automatique du menu au clic

        creationMenu.addEventListener('click',function(){

            menu.classList.remove('toggle');
        });

      contactMenu.addEventListener('click',function(){

            menu.classList.remove('toggle');
        });
// quand le menu est sur la premier page on enleve le titre

        

        document.addEventListener('scroll', function(){

            let windowPos = window.scrollY;
            let isNotFirstPage = headerName.classList.contains('header_opacity');

            if(windowPos < 500 && !isNotFirstPage){

                headerName.classList.add('header_opacity');
              

            }else if(windowPos > 500 && isNotFirstPage){

                headerName.classList.remove('header_opacity');
              

            }
           
            
        })
       




})();