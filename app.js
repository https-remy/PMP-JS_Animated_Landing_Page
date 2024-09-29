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
const txt = 'Nike, just do it.';

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

const animatedElements = [
	...document.querySelectorAll('h2'), 
	...document.querySelectorAll('.section-subtitle')
];

const discoverSectionElements = [
	document.querySelector('.text-discover-content h3'),
	document.querySelector('.text-discover-content p'),
	document.querySelector('.discover-link'),
	document.querySelector('.discover-main-img'),
	document.querySelector('.discover-section h2'),
	document.querySelector('.discover-subtitle'),
];

const slideInContent = [
	...document.querySelectorAll(".side-apparition-container"),
]

const animateElements = [
	...animatedElements,
	...discoverSectionElements,
	...slideInContent,
]

const intersectionObserver = new IntersectionObserver(handleIntersection, {
	rootMargin: "-10%",
});

animateElements.forEach(element => {
	intersectionObserver.observe(element);
});

function handleIntersection(entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('active');
		} else {
			if (!discoverSectionElements.includes(entry.target) && !animatedElements.includes(entry.target)) {
				entry.target.classList.remove('active');
			}
		}
	})
}