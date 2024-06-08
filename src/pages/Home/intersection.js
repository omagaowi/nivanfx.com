const runObserver = (navbar, firstSection, homeMainRef, heroRef) => {
  //  let options0 = {
  //    root: null,
  //    rootMargin: "0px",
  //    threshold: 0.9,
  //  };

  //  let callback0 = (entries, observer) => {
  //    entries.forEach((entry) => {
  //      if (!entry.isIntersecting) {
  //        navbar.current.classList.add("white");
  //        navbar.current.querySelector(".logo img").src = "/src/assets/logo.png";
  //      } else {
  //        navbar.current.classList.remove("white");
  //        navbar.current.querySelector(".logo img").src =
  //          "/src/assets/logo2.png";
  //      }
  //    });
  //  };

  //  let observer0 = new IntersectionObserver(callback0 , options0);
  //  observer0.observe(heroRef.current); 
  
  
  
  
  let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.9,
    };


    let callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            navbar.current.classList.add('white')
            navbar.current.querySelector(".logo img").src = localStorage.getItem('navLogo')? localStorage.getItem('navLogo'): 'http://localhost:3000/logo' ;
        }else{
             navbar.current.classList.remove("white");
              navbar.current.querySelector(".logo img").src = localStorage.getItem('navLogo2')? localStorage.getItem('navLogo2'): 'http://localhost:3000/logo2';
        }
      });
    };

    let observer = new IntersectionObserver(callback, options);
    observer.observe(firstSection.current)

    let options2 = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const allWhites = homeMainRef.current.querySelectorAll('#white-area')

    let callback2 = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navbar.current.classList.add("white");
          navbar.current.querySelector(".logo img").src =
            "/src/assets/logo.png";
        } else {
          // navbar.current.classList.remove("white");
          // navbar.current.querySelector(".logo img").src =
          //   "/src/assets/logo2.png";
        }
      });
    };

    let observer2 = new IntersectionObserver(callback2, options2);
    allWhites.forEach(white => {
      observer2.observe(white)
    })


}

export default runObserver