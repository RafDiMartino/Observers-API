const images = document.querySelectorAll(".image")

const observer = new IntersectionObserver(entries => {

    console.log(entries)
    entries.forEach(entry => {
    entry.target.classList.toggle("show", entry.isIntersecting)
    if (entry.isIntersecting) observer.unobserve(entry.target)
    })
}, {
    threshold: .5,
})

images.forEach(image => {
    observer.observe(image)
})
