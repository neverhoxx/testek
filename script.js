const slider = document.getElementById('slider');
const foregroundImage = document.querySelector('.foreground-img');

slider.addEventListener('input', (e) => {
    const sliderPos = e.target.value;
    foregroundImage.style.width = `${sliderPos}%`;
});

slider.addEventListener('change', (e) => {
    const sliderPos = e.target.value;
    foregroundImage.style.width = `${sliderPos}%`;
});
