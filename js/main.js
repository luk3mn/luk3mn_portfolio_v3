document.querySelector('#contact').addEventListener('click', () => {
    document.querySelector('.box-contact').classList.remove('hidden');
    document.querySelector('.box-about').classList.add('hidden');
    document.querySelector('.box-skills').classList.add('hidden');
    document.querySelector('.box-resume').classList.add('hidden');
    document.querySelector('.box-portfolio').classList.add('hidden');
    document.querySelector('.box-certifications').classList.add('hidden');
})

document.querySelector('#about').addEventListener('click', () => {
    document.querySelector('.box-about').classList.remove('hidden');
    document.querySelector('.box-contact').classList.add('hidden');
    document.querySelector('.box-skills').classList.add('hidden');
    document.querySelector('.box-resume').classList.add('hidden');
    document.querySelector('.box-portfolio').classList.add('hidden');
    document.querySelector('.box-certifications').classList.add('hidden');
})

document.querySelector('#skills').addEventListener('click', () => {
    document.querySelector('.box-skills').classList.remove('hidden');
    document.querySelector('.box-contact').classList.add('hidden');
    document.querySelector('.box-about').classList.add('hidden');
    document.querySelector('.box-resume').classList.add('hidden');
    document.querySelector('.box-portfolio').classList.add('hidden');
    document.querySelector('.box-certifications').classList.add('hidden');
})

document.querySelector('#resume').addEventListener('click', () => {
    document.querySelector('.box-resume').classList.remove('hidden');
    document.querySelector('.box-contact').classList.add('hidden');
    document.querySelector('.box-about').classList.add('hidden');
    document.querySelector('.box-skills').classList.add('hidden');
    document.querySelector('.box-portfolio').classList.add('hidden');
    document.querySelector('.box-certifications').classList.add('hidden');
})

document.querySelector('#portfolio').addEventListener('click', () => {
    document.querySelector('.box-portfolio').classList.remove('hidden');
    document.querySelector('.box-contact').classList.add('hidden');
    document.querySelector('.box-about').classList.add('hidden');
    document.querySelector('.box-skills').classList.add('hidden');
    document.querySelector('.box-resume').classList.add('hidden');
    document.querySelector('.box-certifications').classList.add('hidden');
})

document.querySelector('#certifications').addEventListener('click', () => {
    document.querySelector('.box-certifications').classList.remove('hidden');
    document.querySelector('.box-contact').classList.add('hidden');
    document.querySelector('.box-about').classList.add('hidden');
    document.querySelector('.box-skills').classList.add('hidden');
    document.querySelector('.box-resume').classList.add('hidden');
    document.querySelector('.box-portfolio').classList.add('hidden');
})