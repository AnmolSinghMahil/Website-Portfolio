

const openModal = document.querySelector('.show-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close');

openModal.addEventListener('click',function(){
    modal.classList.remove('hidden');
})

closeModal.addEventListener('click',function(){
    modal.classList.add('hidden');
})


const homeScroll = document.querySelector('#homelink');
const homeSection = document.querySelector('#home-section');

homeScroll.addEventListener('click',function(e){
    e.preventDefault();
    homeSection.scrollIntoView({behavior:"smooth"});

})


const aboutScroll = document.getElementById('aboutlink');
const aboutSection = document.querySelector('#about-section');
aboutScroll.addEventListener('click',function(e){
    e.preventDefault();
    aboutSection.scrollIntoView({behavior:"smooth"});
    console.log('about was clicked');
})


const portfolioSection = document.querySelector('#portfolio-section');
const portfolioScroll = document.querySelector('#Portfolio');

portfolioScroll.addEventListener('click',function(e){
    e.preventDefault();
    portfolioSection.scrollIntoView({behavior:"smooth"});
})

 



