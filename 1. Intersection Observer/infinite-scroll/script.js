let positionToAdd = 3
const numberOfVideosToAdd = 2
const numberOfVideos = 8
const $limit = document.querySelector(".limit")
const $templateOfVideo = document.querySelector("#template")

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			for (let i = 0; i < numberOfVideosToAdd; i++) {
				positionToAdd++
				const $video = $templateOfVideo.content
					.cloneNode(true)
					.querySelector(".video")
				const numberOfVideo = Math.floor(Math.random() * (numberOfVideos - 1))
				$video
					.querySelector("video")
					.setAttribute("src", `src/${numberOfVideo}.mp4`)
				$limit.parentNode.insertBefore($video, $limit)
			}
		}
	},
	{
		rootMargin: "50%",
	})
})

observer.observe($limit)