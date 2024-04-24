// JAVA MODAL FUNCTIONS
document.querySelector('#plus-skill-java').addEventListener('click', ()  => {
    document.querySelector('.hard-skills').classList.add('hidden');
    document.querySelector('.java-skill').classList.remove('hidden');
})

document.querySelector('#minus-java').addEventListener('click', () => {
    document.querySelector('.hard-skills').classList.remove('hidden');
    document.querySelector('.java-skill').classList.add('hidden');
})

// PYTHON MODAL FUNCTIONS
document.querySelector('#plus-skill-py').addEventListener('click', () => {
    document.querySelector('.hard-skills').classList.add('hidden');
    document.querySelector('.py-skill').classList.remove('hidden');
})

document.querySelector('#minus-py').addEventListener('click', () => {
    document.querySelector('.hard-skills').classList.remove('hidden');
    document.querySelector('.py-skill').classList.add('hidden');
})

// AWS MODAL FUNCTIONS
document.querySelector('#plus-skill-aws').addEventListener('click', () => {
    document.querySelector('.hard-skills').classList.add('hidden');
    document.querySelector('.aws-skill').classList.remove('hidden');
})

document.querySelector('#minus-aws').addEventListener('click', () => {
    document.querySelector('.hard-skills').classList.remove('hidden');
    document.querySelector('.aws-skill').classList.add('hidden');
})

// Button to expand publication on mobile
document.querySelector('#btn-open-pub').addEventListener('click', () => {
    document.querySelector('.container .content .box-resume .content-resume .resume .resume-publication').classList.remove('hidden-pub')
})

document.querySelector('#btn-close-pub').addEventListener('click', () => {
    document.querySelector('.container .content .box-resume .content-resume .resume .resume-publication').classList.add('hidden-pub')
})