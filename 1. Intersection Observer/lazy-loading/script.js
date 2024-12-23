const $images = document.querySelectorAll("[data-src]")

const options = {
	rootMargin: "200px"
}

const callback = (entries, self) => {
    entries.forEach((entry) => {
		if (entry.isIntersecting) {
            entry.target.src = entry.target.getAttribute("data-src")
            self.unobserve(entry.target)
		}
	})
}

const observer = new IntersectionObserver(
    callback,
    options
)

$images.forEach((image) => {
	observer.observe(image)
})