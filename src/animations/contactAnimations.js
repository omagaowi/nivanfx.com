import { contactRef } from "../pages/Contact/ContactMain.jsx"

const runContactAnimations = () => {
    contactDesktop()
}

const contactDesktop = () => {
    const contactContent = contactRef.current.querySelector('.contact-content')
    const contactH1 = contactRef.current.querySelector('.main-text h1')
    const contactP = contactRef.current.querySelector(".main-text p");
    const socialIcons = contactRef.current.querySelectorAll(".social .icon");

    contactH1.classList.add('remove')
     contactP.classList.add("remove");

     const items = contactRef.current.querySelectorAll(".item");

   setTimeout(() => {
        contactH1.classList.remove("no-opacity");
        contactH1.classList.remove("remove");
        setTimeout(()=>{
             contactP.classList.remove("no-opacity");
             contactP.classList.remove("remove");
             setTimeout(() => {
                socialIcons.forEach((icon, index) => {
                    setTimeout(()=>{
                        icon.classList.remove('remove')
                    }, index * 100)
                });
                contactContent.classList.remove('remove')
                setTimeout(() => {
                    items.forEach((item, index) => {
                        setTimeout(()=>{
                            item.classList.remove('remove')
                            item.querySelector('h3').classList.add('remove')
                            setTimeout(()=>{
                                item.querySelector('h3').classList.remove('no-opacity')
                                item.querySelector('h3').classList.remove('remove')
                                setTimeout(()=>{
                                    item.querySelectorAll("p").forEach((p, index) => {
                                        setTimeout(() => {
                                            p.classList.remove('remove')
                                        }, index * 200);
                                    });
                                }, 200)
                            }, 300)
                        }, index * 1000)
                    })
                }, 600);
             }, 500);
        }, 300)
   }, 800);



}


export { runContactAnimations }