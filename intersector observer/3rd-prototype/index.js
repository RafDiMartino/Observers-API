const hidingObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		entry.target.classList.toggle('show', entry.isIntersecting);
        if (entry.isIntersecting) hidingObserver.unobserve(entry.target)
	});
});

const hiddenElements = document.querySelectorAll(".image");
hiddenElements.forEach(((element, i) => {
	element.style.transitionDelay = i * 100 + "ms";
	hidingObserver.observe(element);
}));