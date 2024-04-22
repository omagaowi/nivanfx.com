const navAnimationsDesktop = () => {
    document.querySelector('nav').classList.add('remove')
    setTimeout(()=>{
         document.querySelector("nav").classList.remove("remove");
    }, 500)
}

export { navAnimationsDesktop }