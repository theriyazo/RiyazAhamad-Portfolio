const toggleButton = document.getElementsByClassName('burger')[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})




















// const navSlide = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-links');
//     const navLinks = document.querySelectorAll('.nav-links li')

//     burger.addEventListener('click', () =>{
//         nav.classList.toggle('nav-active');

//      //Animate Links
//         navLinks.forEach((link, index) => {
//             if(link.style.animation)
//             {
//                 link.style.animation = '';
//             }
//             else{
//                 link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
//             }
//         });
//         //burger animation
//         burger.classList.toggle('toggle');
//     });

    
    
// }
// navSlide();