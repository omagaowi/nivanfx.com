import { firstSectionRef } from "../pages/Home/FirstSection/FirstSection.jsx";
import { serviceRef } from "../pages/Services/ServiceSection.jsx";
import { communityRef } from "../pages/Home/Socials/Socials.jsx";


const runHomeAnimations = (heroRef) => {
    if(window.innerWidth > 670){
         firstSectionAnimationsDesktop(firstSectionRef)
    }else{
        firstSectionAnimationsMobile(firstSectionRef)
    }

    servicesHeaderAnimation()
    socialSectionAnimation(communityRef)


    const isServiceDesktop = window.innerWidth > 820



    serviceRef.current.querySelectorAll('.cards .card').forEach((card, index) => {
        if(card){
            if(isServiceDesktop){
                 card.classList.add("remove");
                serviceCardsAnimation(card, index, isServiceDesktop);
            }else{
                 card.classList.add("remove-mobile");
                serviceCardsAnimation(card, index, isServiceDesktop);
            }
        }
    })


    heroRef.current.querySelectorAll('.hero-text h1')[0].classList.add('remove');
    heroRef.current.querySelectorAll('.hero-text h1')[1].classList.add('remove');
    heroRef.current.querySelector('.hero-main .buttons').classList.add('remove')
    setTimeout(()=>{
       heroRef.current.querySelector('.hero-content').classList.remove('remove');
        setTimeout(()=>{
              heroRef.current.querySelectorAll('.hero-text h1')[0].classList.remove('remove');
              heroRef.current.querySelectorAll('.hero-text h1')[0].classList.remove('no-opacity');
              setTimeout(() => {
                 heroRef.current.querySelectorAll('.hero-text h1')[1].classList.remove('remove');
                heroRef.current.querySelectorAll('.hero-text h1')[1].classList.remove('no-opacity');
                setTimeout(() => {
                    heroRef.current.querySelector('.hero-main .buttons').classList.remove('remove')
                     heroRef.current.querySelector('.hero-main .buttons').classList.remove('no-opacity')
                }, 300);
              }, 200);
        }, 600)
    }, 1000)
}

const firstSectionAnimationsDesktop = (firstSectionRef) => {
    // image animations
    const firstSectionImage = firstSectionRef.current.querySelector(".image");
    firstSectionImage.classList.add('remove')
    let imageOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    let imageCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            firstSectionImage.classList.remove("no-opacity");
            firstSectionImage.classList.remove("remove");
        } else {
            console.log('dd')
        }
      });
    };

    //section content animations

    const firstSectionContent = firstSectionRef.current.querySelector('.section-content')
    firstSectionContent.querySelector("h1").classList.add("remove");
    firstSectionContent.querySelector("p").classList.add("remove");
    firstSectionContent.querySelector(".buttons").classList.add("remove");

     let sectionContentOptions = {
       root: null,
       rootMargin: "0px",
       threshold: 0.9,
     };

     let sectionCallback = (entries) => {
       entries.forEach((entry) => {
         if (entry.isIntersecting) {
            setTimeout(()=>{
                   firstSectionContent.querySelector('h1').classList.remove('remove')
                   firstSectionContent.querySelector("h1").classList.remove("no-opacity");
                   setTimeout(() => {
                        firstSectionContent.querySelector('p').classList.remove('remove')
                        firstSectionContent.querySelector("p").classList.remove("no-opacity");
                        setTimeout(() => {
                            firstSectionContent.querySelector('.buttons').classList.remove('remove')
                        firstSectionContent.querySelector(".buttons").classList.remove("no-opacity");
                        }, 200);
                   }, 300);
            }, 500)
         }
       });
     };



    
    useObserver(firstSectionContent, sectionContentOptions, sectionCallback)
    useObserver(firstSectionImage, imageOptions, imageCallback)
}

const firstSectionAnimationsMobile = (firstSectionRef) => {
    const firstSectionImage = firstSectionRef.current.querySelector(".image");
    firstSectionImage.classList.add('remove-mobile')
    let imageOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    let imageCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            firstSectionImage.classList.remove("no-opacity");
            firstSectionImage.classList.remove("remove-mobile");
        }
      });
    };


     //section content animations

    const firstSectionContent = firstSectionRef.current.querySelector('.section-content')
    firstSectionContent.querySelector("h1").classList.add("remove-mobile");
    firstSectionContent.querySelector("p").classList.add("remove-mobile");
    firstSectionContent.querySelector(".buttons").classList.add("remove-mobile");

     let sectionContentOptions = {
       root: null,
       rootMargin: "0px",
       threshold: 0.4,
     };

     let sectionCallback = (entries) => {
       entries.forEach((entry) => {
         if (entry.isIntersecting) {
            setTimeout(()=>{
                    firstSectionImage.classList.remove("no-opacity");
                    firstSectionImage.classList.remove("remove-mobile");
                   firstSectionContent.querySelector('h1').classList.remove('remove-mobile')
                   firstSectionContent.querySelector("h1").classList.remove("no-opacity");
                   setTimeout(() => {
                        firstSectionContent.querySelector('p').classList.remove('remove-mobile')
                        firstSectionContent.querySelector("p").classList.remove("no-opacity");
                        setTimeout(() => {
                            firstSectionContent.querySelector('.buttons').classList.remove('remove-mobile')
                            firstSectionContent.querySelector(".buttons").classList.remove("no-opacity");
                        }, 300);
                   }, 300);
            }, 0)
         }
       });
     };

    useObserver(firstSectionContent, sectionContentOptions, sectionCallback);
    useObserver(firstSectionImage, imageOptions, imageCallback);
}

const servicesHeaderAnimation = () => {
    const heading = serviceRef.current.querySelector('.heading')
    heading.querySelector('h1').classList.add('remove')
    let headingOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    let headingCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                 heading.querySelector("h1").classList.remove("no-opacity");
                 heading.querySelector("h1").classList.remove("remove");
                 setTimeout(()=>{
                     heading.querySelector(".line").classList.remove("remove");
                 }, 100)
            }, 200);
        }
      });
    };

     useObserver(heading, headingOptions, headingCallback);
    
}


const serviceCardsAnimation = (card, index, isServiceDesktop) => {
    let cardOptions = {
      root: null,
      rootMargin: "0px",
      threshold: isServiceDesktop? 0.5: 0.3,
    };
    let cardCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if(index == 0){
             if(isServiceDesktop){
                    card.classList.remove("no-opacity");
                  card.classList.remove("remove");
             }else{
                card.classList.remove("no-opacity");
                card.classList.remove("remove-mobile");
             }
          }else{
            setTimeout(() => {
                    if (isServiceDesktop) {
                        card.classList.remove("no-opacity");
                      card.classList.remove("remove");
                    } else {
                        card.classList.remove("no-opacity");
                      card.classList.remove("remove-mobile");
                    }
            }, 200);
          }
        }
      });
    };
    
      useObserver(card, cardOptions, cardCallback);
}

const socialSectionAnimation = (communityRef) => {
    const communityH1 = communityRef.current.querySelector('h1')

     communityH1.classList.add("remove");
      communityRef.current.querySelector("p").classList.add("remove");
       communityRef.current.querySelector(".buttons").classList.add("remove");
     let socialOptions = {
       root: null,
       rootMargin: "0px",
       threshold: 1,
     };

     let socialCallback = (entries) => {
       entries.forEach((entry) => {
            if(entry.isIntersecting){
                setTimeout(()=>{
                    communityH1.classList.remove("no-opacity");
                    communityH1.classList.remove("remove");
                    setTimeout(()=> {
                        communityRef.current.querySelector('p').classList.remove("no-opacity");
                         communityRef.current.querySelector('p').classList.remove("remove");
                         setTimeout(() => {
                            communityRef.current.querySelector(".buttons").classList.remove("no-opacity");
                            communityRef.current.querySelector(".buttons").classList.remove("remove");
                         }, 300);
                    }, 300)
                }, 200)
            }
       });
     };

     useObserver(communityH1, socialOptions, socialCallback)
}



const useObserver = (elemm, options, callback) => {
    let observer = new IntersectionObserver(callback, options);
    observer.observe(elemm);
}

export { runHomeAnimations, serviceCardsAnimation, servicesHeaderAnimation }

