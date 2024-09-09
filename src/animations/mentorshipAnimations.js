import { IoEllipseSharp } from "react-icons/io5";
import { serviceHeroRef } from "../components/ServicesHero.jsx"
import { freeGuideRef, plansRef } from "../pages/Mentorships/MentorshipsMain.jsx";

const serviceHeroAnimationDesktop = (serviceHeroRef) => {
     serviceHeroRef.current.querySelector(".service-hero-text p").classList.add('remove');
     serviceHeroRef.current.querySelector(".service-hero-text h1").classList.add('remove');
      serviceHeroRef.current.querySelector(".service-hero-image").classList.add('remove');

    setTimeout(()=>{
        serviceHeroRef.current.querySelector(".service-hero-text p").classList.remove('no-opacity');
        serviceHeroRef.current.querySelector(".service-hero-text p").classList.remove('remove');
        setTimeout(() => {
            serviceHeroRef.current.querySelector(".service-hero-text h1").classList.remove('no-opacity');
            serviceHeroRef.current.querySelector(".service-hero-text h1").classList.remove('remove');
             setTimeout(()=>{
                serviceHeroRef.current.querySelector(".service-hero-image").classList.remove('no-opacity');
                serviceHeroRef.current.querySelector(".service-hero-image").classList.remove('remove');
            }, 300)
        }, 300);
    }, 1100)
}

const runMentorshipAnimations = () => {
    serviceHeroAnimationDesktop(serviceHeroRef)
    freeGuideAnimation(freeGuideRef)
    plansHeaderAnimation(plansRef)

      const isPlanDesktop = window.innerWidth > 1140;

      const allPlanCards =  Ref.current.querySelectorAll(".plans .plan");
 
      allPlanCards.forEach((plan, index) => {
 
        plansCardAnimation(plansRef, plan, index, isPlanDesktop);
      });
}

const freeGuideAnimation = (freeGuideRef) => {
    const freeGuideH1 = freeGuideRef.current.querySelector('.free-guide-main h1')
    freeGuideH1.classList.add('remove')
     freeGuideRef.current.querySelector(".free-guide-main p").classList.add("remove");
      freeGuideRef.current.querySelector(".free-guide-main .buttons").classList.add("remove");

     let freeGuideOptions = {
       root: null,
       rootMargin: "0px",
       threshold: 0.7,
     };

     let freeGuideCallback = (entries) => {
       entries.forEach((entry) => {
            if(entry.isIntersecting){
               setTimeout(() => {
                 freeGuideH1.classList.remove("no-opacity");
                 freeGuideH1.classList.remove("remove");
                 setTimeout(() => {
                    freeGuideRef.current.querySelector(".free-guide-main p").classList.remove("no-opacity");
                     freeGuideRef.current.querySelector(".free-guide-main p").classList.remove("remove");
                     setTimeout(()=>{
                          freeGuideRef.current.querySelector(".free-guide-main .buttons").classList.remove("no-opacity");
                          freeGuideRef.current.querySelector(".free-guide-main .buttons").classList.remove("remove");
                     }, 300)
                 }, 300);
               }, 0);
            }
       });
     }

     useObserver(freeGuideH1, freeGuideOptions, freeGuideCallback)

}

const plansHeaderAnimation = (plansRef) => {
    const heading = plansRef.current.querySelector(".heading");
 
    heading.querySelector("h1").classList.add("remove");

     let plansHeaderOptions = {
       root: null,
       rootMargin: "0px",
       threshold: 0.6,
     };

     let plansHeaderCallback = (entries) => {
       entries.forEach((entry) => {
            if(entry.isIntersecting){
                 setTimeout(() => {
                   heading.querySelector("h1").classList.remove("no-opacity");
                   heading.querySelector("h1").classList.remove("remove");
                   setTimeout(() => {
                     heading.querySelector(".line").classList.remove("remove");
                   }, 100);
                 }, 200);
            }
       });
     }

    useObserver(heading, plansHeaderOptions, plansHeaderCallback);
}



const plansCardAnimation = (plansRef, card, index, isPlanDesktop) => {
 
    card.classList.add('remove')
     let planCardOptions = {
       root: null,
       rootMargin: "0px",
       threshold: 0.3,
     };

     let planCardCallback = (entries) => {
 
       entries.forEach((entry) => {
         if (entry.isIntersecting) {
 
            if(index == 0){
                setTimeout(() => {
                     card.classList.remove("no-opacity");
                    card.classList.remove("remove");
                }, 0);
            }else if(index == 1){
                if(isPlanDesktop){
 
                     setTimeout(() => {
                       card.classList.remove("no-opacity");
                       card.classList.remove("remove");
                     }, 200);
                }else{
 
                    card.classList.remove("no-opacity");
                    card.classList.remove("remove");
                }
            }else if(index == 2){
                 if (isPlanDesktop) {
 
                   setTimeout(() => {
                     card.classList.remove("no-opacity");
                     card.classList.remove("remove");
                   }, 300);
                 } else {
 
                   card.classList.remove("no-opacity");
                   card.classList.remove("remove");
                 }
            }
         }else{
 
         }
       });
     };

     useObserver(card, planCardOptions, planCardCallback)
}


const useObserver = (elemm, options, callback) => {
  let observer = new IntersectionObserver(callback, options);
  observer.observe(elemm);
};

export {
    serviceHeroAnimationDesktop,
    runMentorshipAnimations
}