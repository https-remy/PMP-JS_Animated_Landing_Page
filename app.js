const customCursor = document.querySelector('.custom-cursor');

window.addEventListener('mousemove', handleCustomCursor);

function handleCustomCursor(e) {
	setTimeout(() => {
		customCursor.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
	}, 60);
}

const title = document.querySelector('h1');
const subtitle = document.querySelector('.subtitle');
const discoverLink = document.querySelector('.hero-push-link');
const txt = 'Porsche, set free.';

function typeWriter(text, index) {
	if (index > 3) subtitle.classList.add('active');
	if (index > 6) discoverLink.classList.add('active');

	if (index < text.length) {
		setTimeout(() => {
			title.innerHTML += `<span>${text[index]}</span>`;
			typeWriter(text, index + 1);
		}, 150);
	}
}

setTimeout(() => {
	typeWriter(txt, 0);
}, 300);

discoverLink.addEventListener('click', slideDown);

function slideDown(e) {
	e.preventDefault();

	window.scrollTo({
		top: document.querySelector(`${e.target.getAttribute("href")}`).offsetTop,
		behavior: 'smooth',
	});
}