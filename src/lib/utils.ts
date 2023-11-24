export function scroll(section: HTMLDivElement) {
	section.scrollIntoView({ behavior: 'smooth' });
}

export function scrollTop() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}
