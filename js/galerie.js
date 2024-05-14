(function(){
        // responsive const
        const smallScreen = window.matchMedia('screen and (max-width:850px) ');
        // constantes 
        // logo
        const logoButton = document.querySelector('.container-logo');
        const printButton = document.querySelector('.container-affiche');
        const webButton = document.querySelector('.container-web');

        // responsive galerie img
        const imgLogo = document.querySelector('.container-logo #imglogo');
        const imgAffiche = document.querySelector('.container-affiche img');
        const imgWeb = document.querySelector('.container-web img');
       
        
       
      // fonction

      logoButton.addEventListener('click', function(){
        window.scrollTo(0,1665);
      });
      printButton.addEventListener('click', function(){
        window.scrollTo(0,2400);
      });
      webButton.addEventListener('click', function(){
        window.scrollTo(0,3194);
      });

      // fonction pour changer l'image en responsive
     
      if(smallScreen.matches){
        imgLogo.setAttribute('src','images/logo_responsive.jpg');
        imgAffiche.setAttribute('src','images/affiche_responsive.jpg');
        imgWeb.setAttribute('src','images/web_responsive.jpg');
       
      }else{
        imgLogo.setAttribute('src','images/logo.jpg');
        imgAffiche.setAttribute('src','images/affiche.jpg');
        imgWeb.setAttribute('src','images/web.jpg');
      
      }
      
      // if window resize
      function rezise(){
     const logoAttribute = imgLogo.getAttribute('src');

        if(smallScreen.matches ){

          imgLogo.setAttribute('src','images/logo_responsive.jpg');
          imgAffiche.setAttribute('src','images/affiche_responsive.jpg');
          imgWeb.setAttribute('src','images/web_responsive.jpg');

    
       
        }else {

          imgLogo.setAttribute('src','images/logo.jpg');
          imgAffiche.setAttribute('src','images/affiche.jpg');
          imgWeb.setAttribute('src','images/web.jpg');


        }
      }
      window.onresize = rezise;
    
     



})()