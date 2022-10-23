// const hiddenElements = document.querySelectorAll(".hidden")

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             entry.target.classList.add("show")
//         }

//     })
// })

const hidingObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		entry.target.classList.toggle('show', entry.isIntersecting);
        if (entry.isIntersecting) hidingObserver.unobserve(entry.target)
	});
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach(((element, i) => {
	element.style.transitionDelay = i * 300 + "ms";
	hidingObserver.observe(element);
}));

// hiddenElements.forEach((el) => observer.observe(el)) 