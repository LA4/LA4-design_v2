(function(){
    // responsive var
    const smallScreen = window.matchMedia('screen and (min-width:850px) ');


    // hover main name

    //constantes
        const mainName = document.querySelector('.main-name');
        const mouveName = document.querySelector('.main-name h1');
        const mouveLastName = document.querySelector('.main-name h2');
        const presentation = document.querySelector('.presentation');

        const rectblue = document.querySelector('.rect-blue')

        const mainjob = document.querySelector('.main-job');
        const downloadPortfolio = document.querySelector('.main-job .click');

                // mouse in
                    mainName.addEventListener('mouseenter',function(){

                            if(smallScreen.matches){

                                presentation.style.left ="5%";
                                presentation.style.top ="5%";
                                presentation.style.transform ="scale(1,1)";
                    
                                mouveName.classList.add('mouve-name');
                                mouveLastName.classList.add('mouve-name');

                                rectblue.style.opacity = "0"
                                mainjob.style.opacity  = "0"

                                downloadPortfolio.style.position = "absolute"
                                downloadPortfolio.style.transform = "scale(0,0)"

                                clearInterval(move)
                            }else{
                                rectblue.style.opacity = "0"
                                mainjob.style.opacity  = "0"

                                downloadPortfolio.style.transition = "1s"
                                downloadPortfolio.style.position = "absolute"
                                downloadPortfolio.style.transform = "scale(0,0)"

                                presentation.classList.add('pop-presentation')
                            }
                     
            
            
                    });
                
      
    

            //mouse leave
        mainName.addEventListener('mouseleave',function(){
            
                if(smallScreen.matches){

                    presentation.style.left ="-100%";
                    presentation.style.transform ="scale(0)";
        
                    mouveName.classList.remove('mouve-name');
                    mouveLastName.classList.remove('mouve-name');

                    rectblue.style.opacity = "1"
                    mainjob.style.opacity = "1"

                    downloadPortfolio.style.position = "relative"
                    downloadPortfolio.style.transform = "scale(1,1)"
                 

                }else{

                    presentation.classList.remove('pop-presentation');

                    rectblue.style.opacity = "1"
                    mainjob.style.opacity = "1"

                    downloadPortfolio.style.position = "relative"
                    downloadPortfolio.style.transform = "scale(1,1)"


                }
           


        })

        // animation du text de présentation

        //
        const presentationHFive = document.querySelector('.presentation_partone h5')
        const presentationHFour = document.querySelector('.presentation h4')
        const presentationP = document.querySelector('.presentation p')

        


    

        





// hover de la section imprimé

//constantes
    const printHover = document.querySelector('.container_carousel h2');
    const paragraph = document.querySelector('.container_carousel p')

    /*
            // mouse in
        printHover.addEventListener('mouseenter',function(){

            printHover.style.fontSize = "3.2rem";
            paragraph.style.transform = "scale(1,1)";

        })

            //mouse out
        printHover.addEventListener('mouseleave',function(){

            printHover.style.fontSize = "3rem";
            paragraph.style.transform = "scale(0,0)";
        })
        */
        // apparition de la sectino imprimés

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
          }

          const intersect = function(entries, observer){
            entries.forEach(function(entry){
                if(entry.intersectionRatio > 0.1){
                    entry.target.classList.add('reveal-visible')
                    observer.unobserve(entry.target)
                }
            })
          }
          
          const observer = new IntersectionObserver(intersect, options);
            observer.observe(paragraph);
            
     
        


        // click leweb 

            // le web_design

            //constantes
            //button
            const leWebClickDesign = document.querySelector('#design');
            const leWebClickonepage = document.querySelector('#onepage');
            const leWebTitle = document.querySelector('.leweb_title');

            // images
            const leWebImage = document.querySelector('.leweb_image img');
            const leWebDesign = document.querySelector('.leweb_webdesign');
            const leWebOnePage = document.querySelector('.leweb_onepage');
            

            // on click
            leWebClickDesign.addEventListener('click',function(){

                leWebImage.classList.add('leweb_close');
                leWebOnePage.classList.add('leweb_close');

                leWebDesign.classList.remove('leweb_close');
                leWebDesign.classList.add('leweb_open');

                leWebClickDesign.style.opacity = '0'
                leWebClickonepage.style.opacity = '1'

            });

            leWebClickonepage.addEventListener('click',function(){

                leWebImage.classList.add('leweb_close');
                leWebDesign.classList.add('leweb_close');

                leWebOnePage.classList.remove('leweb_close');
                leWebOnePage.classList.add('leweb_open');

                leWebClickonepage.style.opacity = '0'
                leWebClickDesign.style.opacity = '1'

            });

            leWebTitle.addEventListener('click',function(){

                leWebOnePage.classList.add('leweb_close');
                leWebDesign.classList.add('leweb_close');

                leWebImage.classList.remove('leweb_close');
                leWebImage.classList.add('leweb_open');

                leWebClickonepage.style.opacity = '1'
                leWebClickDesign.style.opacity = '1'

            });


            // mouvement du nom
             //constants
             const moveName = document.querySelector('.main-name h1')

            // function
            function moveNameKeyframes(){
                moveName.classList.add('movename-keyframes')
                window.setTimeout(function(){
                    moveName.classList.remove('movename-keyframes')
                },1000)
            };

            // set time to 2sec

             let move = window.setInterval(moveNameKeyframes, 2000);
             

            
    

})();