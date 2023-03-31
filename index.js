const animal_cards = document.querySelectorAll('.animals-list__animal-card');
const container = document.getElementById('main-container');

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

animal_cards.forEach(card => card.addEventListener(
    'click', (event) => toggleExpandInfo(event)
));