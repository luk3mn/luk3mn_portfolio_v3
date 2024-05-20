document.querySelector('#toggle-skill-on').addEventListener('click', ()  => {
    document.querySelector('.skill__model').classList.remove('hidden');
});

document.querySelector('#toggle-skill-off').addEventListener('click', ()  => {
    document.querySelector('.skill__model').classList.add('hidden');
});