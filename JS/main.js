const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')
const slider = document.querySelector('.slider')
const sliderList = slider.querySelector('.list')
const thumbnail = slider.querySelector('.thumbnail')

const animationTime = 1600
let isMoving = false

// A primeira miniatura representa a imagem atual. Ela vai para o fim para que
// a primeira miniatura visível passe a representar o próximo slide.
if (thumbnail.firstElementChild) {
    thumbnail.appendChild(thumbnail.firstElementChild)
}

nextBtn.addEventListener('click', () => moveSlider('next'))
prevBtn.addEventListener('click', () => moveSlider('prev'))

function moveSlider(direction) {
    if (isMoving) return

    const sliderItems = Array.from(sliderList.children)
    const thumbnailItems = Array.from(thumbnail.children)

    if (sliderItems.length !== thumbnailItems.length) {
        console.error('Cada slide precisa ter uma miniatura correspondente.')
        return
    }

    isMoving = true

    if (direction === 'next') {
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }

    window.setTimeout(() => {
        slider.classList.remove('next', 'prev')
        isMoving = false
    }, animationTime)
}
