export function scroll(section) {
	section.scrollIntoView({ behavior: 'smooth' });
}

export function scrollTop() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}
