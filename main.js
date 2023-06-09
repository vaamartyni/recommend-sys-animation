const followElement = document.querySelector('.circle-followed');

document.body.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const elementWidth = followElement.offsetWidth;
    const elementHeight = followElement.offsetHeight;

    const newX = mouseX - elementWidth / 2;
    const newY = mouseY - elementHeight / 2;

    followElement.style.left = newX + 'px';
    followElement.style.top = newY + 'px';
});
