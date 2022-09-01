const popup= document.querySelector('.popup-wrapper');
const popper= document.querySelector('.pop-btn');
const closeBack= document.querySelector('.popup-close');



popper.addEventListener('click', ()=>{
popup.style.display='block';
});

closeBack.addEventListener('click', ()=>{
popup.style.display='none';
});
