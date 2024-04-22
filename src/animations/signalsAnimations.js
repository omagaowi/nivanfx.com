import { serviceHeroAnimationDesktop } from "./mentorshipAnimations.js"
import { serviceHeroRef } from "../components/ServicesHero.jsx"
import { freeSignalRef, paidSignalRef } from "../pages/Signals/SignalsMain.jsx";


const runSignalsAnimations = () => {
     serviceHeroAnimationDesktop(serviceHeroRef);
     freeAnimationsDesktop()
     paidAnimationsDesktop()
}

const freeAnimationsDesktop = () => {
    const freeImage = freeSignalRef.current.querySelector('.free-section-image')
    const freeH3 = freeSignalRef.current.querySelector('h3')
    freeImage.classList.add("remove");

    freeH3.classList.add("remove");
    freeSignalRef.current.querySelector("p").classList.add("remove");
    freeSignalRef.current.querySelector(".buttons").classList.add("remove");

    let freeImageOptions = {
       root: null,
       rootMargin: "0px",
       threshold: 0.1,
     };

     let freeImageCallback = (entries) => {
       entries.forEach((entry) => {
            if(entry.isIntersecting){
                freeImage.classList.remove("no-opacity");
                freeImage.classList.remove('remove')
            }
       });
     }

      let freeH3Options = {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      };

      let freeH3Callback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
                  freeH3.classList.remove('no-opacity')
                    freeH3.classList.remove("remove");
                    setTimeout(() => {
                        freeSignalRef.current.querySelector("p").classList.remove("no-opacity");
                        freeSignalRef.current.querySelector("p").classList.remove("remove");
                        setTimeout(() => {
                            freeSignalRef.current.querySelector(".buttons").classList.remove("no-opacity");
                            freeSignalRef.current.querySelector(".buttons").classList.remove("remove");
                        }, 300);
                    }, 300);
            }, 200);
          }
        });
      };




     useObserver(freeImage, freeImageOptions, freeImageCallback)
     useObserver(freeH3, freeH3Options, freeH3Callback);


}


const paidAnimationsDesktop = () => {
  const freeImage = paidSignalRef.current.querySelector(".free-section-image");
  const freeH3 = paidSignalRef.current.querySelector("h3");
  freeImage.classList.add("remove");

  freeH3.classList.add("remove");
  paidSignalRef.current.querySelector("p").classList.add("remove");
  paidSignalRef.current.querySelector(".buttons").classList.add("remove");

  let freeImageOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  let freeImageCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        freeImage.classList.remove("no-opacity");
        freeImage.classList.remove("remove");
      }
    });
  };

  let freeH3Options = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };

  let freeH3Callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          freeH3.classList.remove("no-opacity");
          freeH3.classList.remove("remove");
          setTimeout(() => {
            paidSignalRef.current
              .querySelector("p")
              .classList.remove("no-opacity");
            paidSignalRef.current.querySelector("p").classList.remove("remove");
            setTimeout(() => {
              paidSignalRef.current
                .querySelector(".buttons")
                .classList.remove("no-opacity");
              paidSignalRef.current
                .querySelector(".buttons")
                .classList.remove("remove");
            }, 300);
          }, 300);
        }, 200);
      }
    });
  };

  useObserver(freeImage, freeImageOptions, freeImageCallback);
  useObserver(freeH3, freeH3Options, freeH3Callback);
};

const useObserver = (elemm, options, callback) => {
  let observer = new IntersectionObserver(callback, options);
  observer.observe(elemm);
};


export { runSignalsAnimations }