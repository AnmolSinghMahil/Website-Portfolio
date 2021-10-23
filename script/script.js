

const openModal = document.querySelector('.show-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close');
const blur1 = document.querySelector('.blur');

openModal.addEventListener('click',function(){
    modal.classList.remove('hidden');
    blur1.classList.remove('hidden');
})

closeModal.addEventListener('click',function(){
    modal.classList.add('hidden');
    blur1.classList.add('hidden');
})




// const homeScroll = document.querySelector('#homelink');
// const homeSection = document.querySelector('#home-section');

// homeScroll.addEventListener('click',function(e){
//     e.preventDefault();
//     homeSection.scrollIntoView({behavior:"smooth"});

// })


// const aboutScroll = document.getElementById('aboutlink');
// const aboutSection = document.querySelector('#about-section');
// aboutScroll.addEventListener('click',function(e){
//     e.preventDefault();
//     aboutSection.scrollIntoView({behavior:"smooth"});
//     console.log('about was clicked');
// })


// const portfolioSection = document.querySelector('#portfolio-section');
// const portfolioScroll = document.querySelector('#Portfolio');

// portfolioScroll.addEventListener('click',function(e){
//     e.preventDefault();
//     portfolioSection.scrollIntoView({behavior:"smooth"});
// })

 
// Event delegation 
// select the commmon element which is '.list'
// determine where the target event is happening with e.target
document.querySelector('.list').addEventListener('click', function (e) {

    e.preventDefault();
    //we only want to select the target with class 'scroll' not something around the link
    if (e.target.classList.contains('scroll')) {
    // get the href attribute which has the section you want to go to
        const id = e.target.getAttribute('href');
    // and select e.target/id and use the function scrollIntoView on that id, like section--2
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
});

const scrollDown = document.querySelector('.scroll-down');
const nextSection = document.querySelector('#section--2');

scrollDown.addEventListener('click',function(){
    nextSection.scrollIntoView({behavior:"smooth"});
})


//----------------------Nav-Responsive--------------------//

const closebtn = document.querySelector("#nav-close");
const togglebtn = document.querySelector("#nav-toggle");
const navlinks= document.querySelector(".nav-links")

closebtn.addEventListener("click", ()=>{

    closebtn.classList.remove('hidden');
    closebtn.classList.add("show");
    console.log("closebtn was clicked")
    
})

if(togglebtn) {
    togglebtn.addEventListener("click",()=>{
        navlinks.classList.add("show-menu");
        console.log("toggle is pressed");
    })
}