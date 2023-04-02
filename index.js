const animal_cards = document.querySelectorAll('.animals-list__animal-card');
const container = document.getElementById('main-container');
const contribuir_btn = document.querySelector('.header__btn-wrapper button');
const modal = document.querySelector('.modal-contribuir');
const modal_blur = document.querySelector('.modal-blur');

function toggleExpandInfo(event) {

    let target = event.target;

    while(target.classList[0] !== 'animals-list__animal-card') {
        target = target.parentNode;
    }

    let expandInfo = target.querySelector('.animal-description__expand-info');
    expandInfo.classList.toggle('animal-description__expand-info-active');

    let expandBtn = target.querySelector('.animal-description__expand-info-btn');

    if(container.offsetWidth <= 800) {
        console.log('entrou');
        if(expandBtn.style.bottom = '0rem') {
            setTimeout(() => {
                expandBtn.style.bottom = '-2rem';
            }, 1200);
        } else {
            expandBtn.style.bottom = '0rem';
        }
    }
}

function addModal() {
    modal.classList.add('modal-active');
    modal_blur.classList.add('modal-active');
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.height = '100vh';
}

function removeModal() {
    modal.classList.remove('modal-active');
    modal_blur.classList.remove('modal-active');
    document.documentElement.style.overflow = 'visible';
    document.documentElement.style.height = 'auto';
}

animal_cards.forEach(card => card.addEventListener(
    'click', (event) => toggleExpandInfo(event)
));

contribuir_btn.addEventListener('click', (event) => addModal(event));
modal_blur.addEventListener('click', (event) => removeModal(event));