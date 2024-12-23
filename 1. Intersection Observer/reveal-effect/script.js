const $images = document.querySelectorAll(".hidden")

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("reveal")
			}
		})
	},
	{
		rootMargin: "10px",
	}
)

$images.forEach((image) => {
	observer.observe(image)
})