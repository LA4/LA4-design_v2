
(function(){
    // responsive
    const smallScreen = window.matchMedia('screen and (min-width:850px) ');
    // afficher la section contact

    // constantes
    const contactMenu = document.querySelector('.contact_menu');
    const contact = document.querySelector('.container_contact');
    const closeContact = document.querySelector('.close_contact');


    contactMenu.addEventListener('click',function(e){
        e.preventDefault();
        e.stopPropagation();
            if(smallScreen.matches){

                contact.style.transform = "scale(1,1)";
                document.querySelector('main').style.paddingTop =' 100px';
                window.scrollTo(0,0);

            }else{
                contact.style.transform = "scale(1) translateY(20%)";
                window.scrollTo(0,0);
            }
        
    });

    closeContact.addEventListener('click', function(e){

        e.preventDefault();
        e.stopPropagation();
                if(smallScreen.matches){

                    contact.style.transform = "scale(0,0)";
                    document.querySelector('main').style.paddingTop ='250px';

                }else{

                    contact.style.transform = "scale(0,0)";
                    document.querySelector('main').style.paddingTop ='100px';
                }
        
        
    });
})()